import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import MenuTabs from '@/components/menu/MenuTabs';
import { vegStarters, vegMainCourse } from '@/data/menu';

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            title="Our Hot Selling Menu"
            subtitle="Handcrafted dishes made fresh daily. Add to cart and order in seconds."
            center
          />
        </AnimatedSection>
        <MenuTabs starters={vegStarters} mains={vegMainCourse} />
      </div>
    </section>
  );
}
