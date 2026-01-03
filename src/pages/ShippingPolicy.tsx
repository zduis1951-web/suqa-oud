import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToTop />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl text-gold text-center mb-4">
            Shipping Policy
          </h1>
          
          <p className="text-center text-gold/60 mb-12">
            SUQA OUD Delivery Information
          </p>

          <div className="space-y-10 text-brown/80 leading-relaxed">
            
            {/* Address & Contact Information */}
            <section>
              <h2 className="font-display text-2xl text-gold mb-4">
                Address & Contact Information
              </h2>
              <p>
                Please ensure your full address and correct phone number are provided at checkout to guarantee a smooth and efficient delivery process.
              </p>
            </section>

            {/* Delivery Times */}
            <section>
              <h2 className="font-display text-2xl text-gold mb-4">
                Delivery Times
              </h2>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-lg border border-gold/10">
                  <h3 className="font-semibold text-gold mb-2">International Shipping</h3>
                  <p>Typically takes 7–10 working days after dispatch, depending on the destination.</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg border border-gold/10">
                  <h3 className="font-semibold text-gold mb-2">Local (UAE) Shipping</h3>
                  <p>Takes 1-2 days.</p>
                </div>
                <p className="text-sm text-brown/60 italic">
                  We are not responsible for unforeseen delays caused by the carrier.
                </p>
              </div>
            </section>

            {/* Additional Charges */}
            <section>
              <h2 className="font-display text-2xl text-gold mb-4">
                Additional Charges
              </h2>
              <p>
                For international and GCC orders, purchasing more than one adult product may incur additional delivery charges due to increased weight. You will be contacted regarding any extra fees before shipping.
              </p>
            </section>

            {/* Customs & Import Fees */}
            <section>
              <h2 className="font-display text-2xl text-gold mb-4">
                Customs & Import Fees
              </h2>
              <p>
                Please note that any applicable customs or import fees will be your responsibility.
              </p>
            </section>

            {/* Urgent Deliveries */}
            <section>
              <h2 className="font-display text-2xl text-gold mb-4">
                Urgent Deliveries
              </h2>
              <p>
                For urgent deliveries, please contact us via WhatsApp.
              </p>
            </section>

            {/* Our Location */}
            <section>
              <h2 className="font-display text-2xl text-gold mb-4">
                Our Location
              </h2>
              <p>
                Our main location is in <strong>Dubai, UAE</strong>.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-gold/20 pt-10">
              <h2 className="font-display text-2xl text-gold mb-4">
                Contact Us
              </h2>
              <p>
                For any questions regarding shipping, please contact us at{" "}
                <a 
                  href="mailto:info@suqaoud.com" 
                  className="text-gold hover:text-gold/80 underline transition-colors"
                >
                  info@suqaoud.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;
