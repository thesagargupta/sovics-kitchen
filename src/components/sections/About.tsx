import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaUtensils, FaLeaf, FaBolt, FaTag, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Feature {
  icon: IconType;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: FaUtensils,
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    title: 'Authentic Desi Taste',
    desc: 'Traditional recipes passed down through generations, cooked with love and desi spices.',
  },
  {
    icon: FaLeaf,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Fresh Ingredients',
    desc: 'We source the freshest vegetables and spices daily to ensure every dish is vibrant and nutritious.',
  },
  {
    icon: FaBolt,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    title: 'Fast Delivery',
    desc: 'Hot, fresh food delivered to your doorstep within 30–45 minutes across Lajpat Nagar and nearby areas.',
  },
  {
    icon: FaTag,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    title: 'Affordable Prices',
    desc: 'Premium homestyle food at prices that make sense — quality without burning a hole in your pocket.',
  },
  {
    icon: FaUsers,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Perfect for Family Meals',
    desc: 'Generous portions and combo options ideal for family dinners, gatherings, and celebrations.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text side */}
          <AnimatedSection>
            <SectionHeading
              title="About Sovic's Kitchen"
              subtitle="Sovic's Kitchen is a popular cloud kitchen located in Lajpat Nagar, New Delhi, known for authentic North Indian and Chinese cuisine prepared with fresh ingredients and traditional recipes."
            />
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <AnimatedSection
                    key={f.title}
                    delay={i * 0.08}
                    className={i === 4 ? 'sm:col-span-2' : ''}
                  >
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-background hover:shadow-md transition-all duration-300 group cursor-default h-full">
                      {/* Icon container */}
                      <div
                        className={`w-12 h-12 rounded-2xl ${f.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={f.iconColor} size={20} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-charcoal text-sm mb-1">
                          {f.title}
                        </h3>
                        <p className="text-charcoal/60 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Image side */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-4">
                  <div
                    className="h-36 sm:h-48 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop')",
                    }}
                  />
                  <div
                    className="h-24 sm:h-32 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop')",
                    }}
                  />
                </div>
                <div className="space-y-4 mt-6">
                  <div
                    className="h-24 sm:h-32 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop')",
                    }}
                  />
                  <div
                    className="h-36 sm:h-48 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop')",
                    }}
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute bottom-3 left-3 sm:-bottom-4 sm:-left-4 bg-primary text-white rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="text-xl sm:text-2xl font-bold font-display">10+</div>
                <div className="text-xs text-white/80">Years of Excellence</div>
              </div>
              <div className="absolute top-3 right-3 sm:-top-4 sm:-right-4 bg-secondary text-white rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="text-xl sm:text-2xl font-bold font-display">500+</div>
                <div className="text-xs text-white/80">Happy Customers</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
