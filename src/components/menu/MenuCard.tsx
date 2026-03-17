'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaFire, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/types';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(i => i.id === item.id);
  const qty = cartItem?.quantity ?? 0;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        show: { opacity: 1, scale: 1, y: 0 },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="flex items-center gap-1 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              <FaStar className="text-yellow-300" size={10} />
              Popular
            </span>
          )}
          {item.isSpicy && (
            <span className="flex items-center gap-1 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              <FaFire size={10} />
              Spicy
            </span>
          )}
        </div>
        {/* Veg indicator */}
        <div className="absolute top-3 right-3">
          <div className="w-5 h-5 bg-white rounded border-2 border-green-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-charcoal text-base leading-tight mb-1">
          {item.name}
        </h3>
        <p className="text-charcoal/60 text-sm line-clamp-2 flex-1 mb-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-primary font-bold text-lg">₹{item.price}</span>

          {qty === 0 ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => addItem(item)}
              className="flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-colors shadow"
            >
              <FaPlus size={11} />
              Add
            </motion.button>
          ) : (
            <div className="flex items-center gap-2 bg-primary/10 rounded-full px-1 py-1">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(item.id, qty - 1)}
                className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaMinus size={10} />
              </motion.button>
              <span className="text-primary font-bold text-sm min-w-[1.2rem] text-center">
                {qty}
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(item.id, qty + 1)}
                className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaPlus size={10} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
