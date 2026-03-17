import { FaInstagram, FaFacebook, FaGoogle, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaUtensils } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#menu', label: 'Our Menu' },
  { href: '#catering', label: 'Catering' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Location' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-display font-bold text-white text-xl">
                S
              </div>
              <span className="font-display font-bold text-xl">Sovic&apos;s Kitchen</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Authentic North Indian and Chinese cloud kitchen in Lajpat Nagar, New Delhi.
              Made fresh, delivered fast, loved always.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Google"
              >
                <FaGoogle size={16} />
              </a>
              <a
                href="https://wa.me/919810468377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-base mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-base mb-5 text-white">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+919810468377"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
              >
                <FaPhone size={14} className="flex-shrink-0" />
                <span className="text-sm">+91 98104 68377</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <FaMapMarkerAlt size={14} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  No. 1, Krishna Market<br />
                  Block E, Lajpat Nagar I<br />
                  New Delhi – 110024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-sm">
            © 2025 Sovic&apos;s Kitchen. All rights reserved.
          </p>
          <p className="text-white/40 text-sm font-medium flex items-center gap-1.5">
            Serving Delicious Food Across Delhi
            <FaUtensils size={12} className="text-primary/60" />
          </p>
        </div>
      </div>
    </footer>
  );
}
