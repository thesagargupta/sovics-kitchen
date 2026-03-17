import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  FaWhatsapp,
  FaUtensils,
  FaBirthdayCake,
  FaHeart,
  FaUsers,
  FaBriefcase,
  FaGlassCheers,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Event {
  icon: IconType;
  label: string;
}

const events: Event[] = [
  { icon: FaBirthdayCake, label: 'Birthday Parties' },
  { icon: FaHeart, label: 'Anniversaries' },
  { icon: FaUsers, label: 'Family Gatherings' },
  { icon: FaBriefcase, label: 'Office Events' },
  { icon: FaGlassCheers, label: 'Small Celebrations' },
];

export default function Catering() {
  const cateringMsg = encodeURIComponent(
    "Hello Sovic's Kitchen! I'm interested in catering services for my event. Please share details."
  );

  return (
    <section id="catering" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <AnimatedSection>
            {/* Badge with icon */}
            <span className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <FaUtensils size={12} />
              Catering Services
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Catering Services for Your{' '}
              <span className="text-secondary">Special Events</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              Let us bring the authentic flavours of Sovic&apos;s Kitchen to your celebration.
              We handle everything so you can enjoy every moment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {events.map((event, i) => {
                const Icon = event.icon;
                return (
                  <AnimatedSection key={event.label} delay={i * 0.07}>
                    <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white font-medium text-sm hover:bg-white/20 transition-colors cursor-default">
                      <Icon size={15} className="flex-shrink-0 text-secondary" />
                      {event.label}
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            <a
              href={`https://wa.me/919810468377?text=${cateringMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl text-base sm:text-lg transition-colors w-full sm:w-auto"
            >
              <FaWhatsapp size={22} />
              Book Catering
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
