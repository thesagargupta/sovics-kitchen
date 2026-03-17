'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes, FaMinus, FaPlus, FaTrash, FaWhatsapp, FaPhone, FaShoppingBasket } from 'react-icons/fa';
import { SiZomato } from 'react-icons/si';
import { useCart } from '@/context/CartContext';

export default function CartSidebar() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, clearCart, totalItems, totalPrice } =
    useCart();

  const buildWhatsAppMessage = () => {
    const lines = items
      .map(i => `• ${i.name} x${i.quantity} = ₹${i.price * i.quantity}`)
      .join('\n');
    const msg = `Hello Sovic's Kitchen! 🍛\n\nI'd like to place an order:\n\n${lines}\n\n*Total: ₹${totalPrice}*\n\nPlease confirm my order. Thank you!`;
    return encodeURIComponent(msg);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.aside
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-primary text-white">
              <div>
                <h2 className="font-display font-bold text-xl">Your Order</h2>
                <p className="text-white/80 text-sm">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
              </div>
              <div className="flex items-center gap-3">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-white/80 hover:text-white text-sm underline"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={toggleCart}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto cart-scroll px-4 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-4">
                    <FaShoppingBasket size={36} className="text-charcoal/25" />
                  </div>
                  <h3 className="font-display font-bold text-charcoal text-xl mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-charcoal/60 text-sm">
                    Add some delicious dishes from our menu!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-3 bg-background rounded-xl p-3"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-charcoal text-sm leading-tight truncate">
                          {item.name}
                        </h4>
                        <p className="text-primary font-bold text-sm mt-0.5">
                          ₹{item.price} each
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-white rounded-full px-1 py-0.5 shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full flex items-center justify-center transition-colors"
                            >
                              <FaMinus size={9} />
                            </button>
                            <span className="text-charcoal font-bold text-sm min-w-[1rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full flex items-center justify-center transition-colors"
                            >
                              <FaPlus size={9} />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-charcoal text-sm">
                              ₹{item.price * item.quantity}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-charcoal/30 hover:text-red-500 transition-colors"
                            >
                              <FaTrash size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-5 space-y-3">
                {/* Summary */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>Delivery</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-charcoal text-lg border-t pt-2">
                    <span>Total</span>
                    <span className="text-primary">₹{totalPrice}</span>
                  </div>
                </div>

                {/* Checkout buttons */}
                <a
                  href={`https://wa.me/919810468377?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-2xl transition-colors shadow-lg"
                >
                  <FaWhatsapp size={20} />
                  Order via WhatsApp
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919810468377"
                    className="flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary hover:text-white text-primary font-semibold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <FaPhone size={13} />
                    Call to Order
                  </a>
                  <a
                    href="https://www.zomato.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-600 font-semibold py-2.5 rounded-xl transition-colors text-sm border border-orange-200"
                  >
                    <SiZomato size={13} />
                    Zomato
                  </a>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
