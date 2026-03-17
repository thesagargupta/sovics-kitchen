'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#catering', label: 'Catering' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Location' },
  { href: '#order', label: 'Order Online' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between h-16 sm:h-[72px] md:h-20">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center font-display font-bold text-white text-lg leading-none shadow-md">
            S
          </div>
          {/* Keep brand compact on mobile to prevent action buttons from wrapping */}
          <span
            className={`hidden md:block font-display font-bold text-base xl:text-lg transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            Sovic&apos;s Kitchen
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-charcoal/80' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Phone — md+ only */}
          <a
            href="tel:+919810468377"
            className={`hidden md:flex items-center gap-1.5 text-sm font-semibold transition-colors ${
              scrolled ? 'text-primary' : 'text-white/90 hover:text-white'
            }`}
          >
            <FaPhone size={12} />
            +91 98104 68377
          </a>

          {/* Quick call icon for small screens */}
          <a
            href="tel:+919810468377"
            className={`md:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
              scrolled
                ? 'border-primary/30 text-primary hover:bg-primary/10'
                : 'border-white/40 text-white hover:bg-white/10'
            }`}
            aria-label="Call now"
          >
            <FaPhone size={12} />
          </a>

          {/* Cart button — fixed size, badge uses outline ring to stay visually separated */}
          <div className="relative flex-shrink-0">
            <button
              onClick={toggleCart}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-md"
              aria-label="Open cart"
            >
              <FaShoppingCart size={15} />
            </button>
            {/* Badge — ring-2 ring-white creates clear visual gap so it never "merges" with neighbour */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center px-1 ring-2 ring-white shadow-sm pointer-events-none">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </div>

          {/* Hamburger — visually distinct: square rounded border style instead of plain circle */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
              scrolled
                ? 'border-charcoal/20 text-charcoal hover:border-primary hover:text-primary bg-transparent'
                : 'border-white/40 text-white hover:border-white hover:bg-white/10 bg-transparent'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                {menuOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — style flips based on scroll position */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden overflow-hidden border-t shadow-xl ${
              scrolled
                ? 'bg-white border-gray-100'
                : 'bg-charcoal/95 border-white/10 backdrop-blur-md'
            }`}
          >
            <ul className="px-3 sm:px-4 py-4 space-y-1 max-h-[calc(100svh-4rem)] overflow-y-auto">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      scrolled
                        ? 'text-charcoal hover:bg-primary/10 hover:text-primary'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="tel:+919810468377"
                  onClick={closeMenu}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors ${
                    scrolled
                      ? 'bg-primary/10 text-primary'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  <FaPhone size={13} />
                  +91 98104 68377
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
