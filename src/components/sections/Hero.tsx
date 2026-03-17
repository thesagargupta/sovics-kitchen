'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaUtensils, FaBookOpen, FaChevronDown } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  const { toggleCart } = useCart();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center pt-24 pb-20 sm:pt-28"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&auto=format&fit=crop')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/85" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-5 sm:space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Est. 2015 · Lajpat Nagar, New Delhi
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            A Taste of Home.{' '}
            <span className="text-secondary">Comfort</span>{' '}
            in Every Bite.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Authentic North Indian and Chinese dishes made fresh in our cloud kitchen.
            Serving Delhi with love, one meal at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={toggleCart}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-2xl text-base sm:text-lg transition-colors w-full sm:w-auto"
            >
              <FaUtensils />
              Order Now
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#menu"
              className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-colors w-full sm:w-auto"
            >
              <FaBookOpen />
              View Menu
            </motion.a>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <a
              href="tel:+919810468377"
              className="inline-flex items-center gap-2 text-white/90 hover:text-secondary transition-colors text-sm sm:text-base font-medium"
            >
              <div className="w-9 h-9 bg-secondary/20 border border-secondary/40 rounded-full flex items-center justify-center">
                <FaPhone size={14} className="text-secondary" />
              </div>
              +91 98104 68377
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — centered at bottom of hero */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center">
        {/* Desktop: mouse scroll widget */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:flex flex-col items-center gap-2 text-white/60 text-xs"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1.5 h-2.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>

        {/* Mobile: bouncing chevron arrow */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="md:hidden flex flex-col items-center gap-1 text-white/60"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <FaChevronDown size={20} className="text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}
