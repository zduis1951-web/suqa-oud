import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReturnPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Return Policy | SUQA OUD</title>
        <meta
          name="description"
          content="SUQA OUD return policy, delivery information, and shipping notes. All sales are final due to the luxury nature of our products."
        />
      </Helmet>
      <ScrollToTop />
      <Header />
      <main className="bg-cream min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl text-gold tracking-wide mb-4">
              Return Policy
            </h1>
            <p className="text-gold/70 text-sm tracking-wide">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-gold/90">
            {/* Returns & Exchanges */}
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-gold mb-4 tracking-wide">
                Returns & Exchanges
              </h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  All sales are final due to the luxury and personal nature of our products. We do not accept returns or exchanges.
                </p>
                <p>
                  Please review your order carefully before completing your purchase.
                </p>
                <p>
                  For questions about a product, fragrance, or size, reach out to us via WhatsApp before ordering.
                </p>
              </div>
            </section>

            {/* Delivery Information */}
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-gold mb-4 tracking-wide">
                Delivery Information
              </h2>
              <div className="border border-gold/20 rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gold/20 hover:bg-transparent">
                      <TableHead className="text-gold font-serif text-base">Region</TableHead>
                      <TableHead className="text-gold font-serif text-base">Delivery Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-gold/20 hover:bg-gold/5">
                      <TableCell className="text-gold/90 font-medium">United Arab Emirates (UAE)</TableCell>
                      <TableCell className="text-gold/80">1–2 days</TableCell>
                    </TableRow>
                    <TableRow className="border-gold/20 hover:bg-gold/5">
                      <TableCell className="text-gold/90 font-medium">
                        GCC Countries
                        <span className="block text-xs text-gold/60 mt-1">
                          (Saudi Arabia, Kuwait, Bahrain, Oman, Qatar)
                        </span>
                      </TableCell>
                      <TableCell className="text-gold/80">5–7 days</TableCell>
                    </TableRow>
                    <TableRow className="border-gold/20 hover:bg-gold/5">
                      <TableCell className="text-gold/90 font-medium">International Orders</TableCell>
                      <TableCell className="text-gold/80">7–10 working days after dispatch</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-gold/70 mt-4 italic">
                We are not responsible for unforeseen delays caused by the carrier.
              </p>
            </section>

            {/* Shipping Notes */}
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-gold mb-4 tracking-wide">
                Shipping Notes
              </h2>
              <ul className="space-y-3 text-sm leading-relaxed list-disc list-inside marker:text-gold/50">
                <li>
                  Please provide your full address and a correct phone number at checkout to ensure smooth delivery.
                </li>
                <li>
                  Ordering more than one adult product may incur additional delivery charges due to increased weight; you will be contacted regarding any extra fees.
                </li>
                <li>
                  For urgent delivery requests, contact us via WhatsApp.
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="border-t border-gold/20 pt-10">
              <h2 className="font-serif text-xl md:text-2xl text-gold mb-4 tracking-wide">
                Contact Us
              </h2>
              <p className="text-sm leading-relaxed">
                If you have any questions about our return or shipping policies, please contact us at{" "}
                <a
                  href="mailto:info@suqaoud.com"
                  className="text-gold underline hover:text-gold/80 transition-colors"
                >
                  info@suqaoud.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
