import { toast } from 'sonner';

// Shopify API Configuration
const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'lovable-project-batsf.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = 'b934ac98775089be1da87ece57111a4b';

// Types
export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

// GraphQL Queries
const STOREFRONT_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Storefront API helper function
export async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (response.status === 402) {
    toast.error("Shopify: Payment required", {
      description: "Shopify API access requires an active Shopify billing plan."
    });
    return null;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`);
  }

  return data;
}

// Fetch products from Shopify
export async function fetchShopifyProducts(first: number = 10, query?: string): Promise<ShopifyProduct[]> {
  try {
    const data = await storefrontApiRequest(STOREFRONT_QUERY, { first, query });
    if (!data) return [];
    return data.data.products.edges;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Search products
export async function searchProducts(searchQuery: string): Promise<ShopifyProduct[]> {
  if (!searchQuery.trim()) return [];
  return fetchShopifyProducts(20, `title:*${searchQuery}*`);
}

// Create direct checkout - user clicks product and goes straight to checkout
export async function createDirectCheckout(variantId: string, quantity: number = 1): Promise<string | null> {
  try {
    const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, {
      input: {
        lines: [
          {
            quantity,
            merchandiseId: variantId,
          }
        ],
      },
    });

    if (!cartData) return null;

    if (cartData.data.cartCreate.userErrors.length > 0) {
      throw new Error(`Cart creation failed: ${cartData.data.cartCreate.userErrors.map((e: { message: string }) => e.message).join(', ')}`);
    }

    const cart = cartData.data.cartCreate.cart;
    
    if (!cart.checkoutUrl) {
      throw new Error('No checkout URL returned from Shopify');
    }

    // Add channel parameter for online store checkout
    const url = new URL(cart.checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch (error) {
    console.error('Error creating checkout:', error);
    toast.error('Failed to create checkout');
    return null;
  }
}

// Handle direct product purchase - opens checkout in new tab
export async function handleDirectPurchase(productHandle: string): Promise<void> {
  try {
    // First fetch the product to get its variant ID
    const products = await fetchShopifyProducts(1, `handle:${productHandle}`);
    
    if (products.length === 0) {
      toast.error('Product not found');
      return;
    }

    const product = products[0];
    const firstVariant = product.node.variants.edges[0]?.node;
    
    if (!firstVariant) {
      toast.error('No variant available for this product');
      return;
    }

    toast.loading('Preparing checkout...', { id: 'checkout-loading' });

    const checkoutUrl = await createDirectCheckout(firstVariant.id);
    
    toast.dismiss('checkout-loading');

    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
    }
  } catch (error) {
    console.error('Error in direct purchase:', error);
    toast.dismiss('checkout-loading');
    toast.error('Failed to process purchase');
  }
}
