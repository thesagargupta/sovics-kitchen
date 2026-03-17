'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function FloatingButtons() {
  const { toggleCart, totalItems } = useCart();
  const [showWaTooltip, setShowWaTooltip] = useState(false);
  const [showCartTooltip, setShowCartTooltip] = useState(false);

  const whatsappUrl =
    'https://wa.me/919810468377?text=' +
    encodeURIComponent("Hello Sovic's Kitchen, I would like to place an order.");

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-5 z-30 flex flex-col items-end gap-2.5 sm:gap-3">
      {/* WhatsApp */}
      <div className="relative flex items-center gap-2">
        <AnimatePresence>
          {showWaTooltip && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden md:block bg-charcoal text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap"
            >
              Order on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setShowWaTooltip(true)}
          onMouseLeave={() => setShowWaTooltip(false)}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors"
          aria-label="Order on WhatsApp"
        >
          <FaWhatsapp size={22} />
        </motion.a>
      </div>

      {/* Order Now / Cart */}
      <div className="relative flex items-center gap-2">
        <AnimatePresence>
          {showCartTooltip && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden md:block bg-charcoal text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap"
            >
              View Cart
            </motion.span>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleCart}
          onMouseEnter={() => setShowCartTooltip(true)}
          onMouseLeave={() => setShowCartTooltip(false)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 bg-primary hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors"
          aria-label="Open cart"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
          <FaShoppingCart size={19} />
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              {totalItems > 9 ? '9+' : totalItems}
            </motion.span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
