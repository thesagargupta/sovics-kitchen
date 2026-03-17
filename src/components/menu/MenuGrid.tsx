'use client';

import { motion } from 'framer-motion';
import { MenuItem } from '@/types';
import MenuCard from './MenuCard';

interface MenuGridProps {
  items: MenuItem[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function MenuGrid({ items }: MenuGridProps) {
  return (
    // Use animate (not whileInView) so re-mounting on tab switch always triggers the stagger
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {items.map(item => (
        <MenuCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
}
