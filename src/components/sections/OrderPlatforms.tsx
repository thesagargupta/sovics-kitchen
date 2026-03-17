import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaExternalLinkAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { SiSwiggy, SiZomato } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Platform {
  name: string;
  icon: IconType;
  description: string;
  cardBg: string;
  cardBorder: string;
  iconBg: string;
  iconColor: string;
  textColor: string;
  btnColor: string;
  href: string;
}

const platforms: Platform[] = [
  {
    name: 'Zomato',
    icon: SiZomato,
    description: 'Order on Zomato for doorstep delivery with live tracking.',
    cardBg: 'bg-red-50',
    cardBorder: 'border-red-200 hover:border-red-400',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    textColor: 'text-red-600',
    btnColor: 'bg-red-600 hover:bg-red-700',
    href: 'https://www.zomato.com',
  },
  {
    name: 'Swiggy',
    icon: SiSwiggy,
    description: 'Get your favourite dishes via Swiggy with fast delivery.',
    cardBg: 'bg-orange-50',
    cardBorder: 'border-orange-200 hover:border-orange-400',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    textColor: 'text-orange-600',
    btnColor: 'bg-orange-500 hover:bg-orange-600',
    href: 'https://www.swiggy.com',
  },
  {
    name: 'Direct Order',
    icon: FaWhatsapp,
    description: 'Order directly via WhatsApp or call for the best deals.',
    cardBg: 'bg-green-50',
    cardBorder: 'border-green-200 hover:border-green-400',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    textColor: 'text-green-600',
    btnColor: 'bg-green-600 hover:bg-green-700',
    href: 'https://wa.me/919810468377?text=Hello%20Sovic%27s%20Kitchen%2C%20I%20would%20like%20to%20place%20an%20order.',
  },
];

export default function OrderPlatforms() {
  return (
    <section id="order" className="py-16 sm:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            title="Order Online"
            subtitle="Choose your preferred platform and enjoy Sovic's Kitchen delivered fresh to your door."
            center
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <AnimatedSection key={platform.name} delay={i * 0.1}>
                <div
                  className={`rounded-3xl border-2 p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${platform.cardBg} ${platform.cardBorder}`}
                >
                  {/* Icon circle */}
                  <div
                    className={`w-16 h-16 ${platform.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm`}
                  >
                    <Icon className={platform.iconColor} size={28} />
                  </div>

                  <h3 className={`font-display font-bold text-xl mb-3 ${platform.textColor}`}>
                    {platform.name}
                  </h3>
                  <p className="text-charcoal/60 text-sm mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${platform.btnColor} text-white font-bold px-6 py-3 rounded-2xl transition-colors shadow-md w-full justify-center`}
                  >
                    <FaExternalLinkAlt size={12} />
                    Order Now
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-charcoal/60 mb-4">Prefer to talk to us directly?</p>
            <a
              href="tel:+919810468377"
              className="inline-flex items-center gap-2 text-primary font-bold text-base sm:text-lg hover:text-red-700 transition-colors"
            >
              <FaPhone />
              +91 98104 68377
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
