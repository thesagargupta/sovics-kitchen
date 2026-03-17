import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections } from 'react-icons/fa';

export default function Location() {
  return (
    <section id="location" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading title="Find Us" center />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <AnimatedSection className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-xl h-72 sm:h-96 lg:h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4272948447!2d77.23545!3d28.5705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c2c4f73933%3A0x8a90ec897b3df7a4!2sLajpat%20Nagar%201%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sovic's Kitchen Location"
              />
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.15} className="lg:col-span-2">
            <div className="bg-background rounded-3xl p-5 sm:p-8 space-y-6 h-full">
              <h3 className="font-display font-bold text-charcoal text-2xl">
                Sovic&apos;s Kitchen
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">Address</p>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      No. 1, Krishna Market<br />
                      Block E, Lajpat Nagar I<br />
                      New Delhi, Delhi 110024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary" size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">Phone</p>
                    <a
                      href="tel:+919810468377"
                      className="text-primary font-medium hover:text-red-700 transition-colors"
                    >
                      +91 98104 68377
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary" size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">Hours</p>
                    <p className="text-charcoal/70 text-sm">Mon – Sun: 11:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Lajpat+Nagar+I+Krishna+Market+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 rounded-2xl hover:bg-red-700 transition-colors shadow-lg"
                >
                  <FaDirections size={16} />
                  Get Directions
                </a>
                <a
                  href="tel:+919810468377"
                  className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3.5 rounded-2xl hover:bg-primary hover:text-white transition-colors"
                >
                  <FaPhone size={14} />
                  Call Now
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
