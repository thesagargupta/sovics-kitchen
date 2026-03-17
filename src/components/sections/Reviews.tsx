'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { reviews } from '@/data/reviews';

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + reviews.length) % reviews.length);
  };

  const review = reviews[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-primary overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            title="What Our Customers Say"
            center
            light
          />
        </AnimatedSection>

        {/* Rating banner */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" size={20} />
              ))}
            </div>
            <span className="text-white font-display font-bold text-2xl sm:text-3xl">4.9</span>
            <span className="text-white/70 text-base sm:text-lg">on Google</span>
          </div>
        </AnimatedSection>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={review.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
            >
              <FaQuoteLeft className="text-primary/20 mb-5 sm:mb-6" size={34} />
              <p className="text-charcoal text-base sm:text-lg md:text-xl leading-relaxed mb-7 sm:mb-8 font-medium">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-charcoal text-base">{review.name}</p>
                  <p className="text-charcoal/50 text-sm">{review.date}</p>
                </div>
                <div className="sm:ml-auto flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons (desktop/tablet) */}
          <button
            onClick={() => navigate(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Next review"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Mobile prev/next controls */}
        <div className="md:hidden flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white text-primary rounded-full shadow-md flex items-center justify-center"
            aria-label="Previous review"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 bg-white text-primary rounded-full shadow-md flex items-center justify-center"
            aria-label="Next review"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
