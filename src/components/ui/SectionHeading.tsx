import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 sm:mb-12', center && 'text-center', className)}>
      <h2
        className={cn(
          'font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight',
          light ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'h-1 w-16 rounded-full bg-primary',
          center && 'mx-auto'
        )}
      />
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg max-w-2xl leading-relaxed',
            light ? 'text-white/80' : 'text-charcoal/70',
            center && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
