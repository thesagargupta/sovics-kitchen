'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaUtensils } from 'react-icons/fa';
import { MenuItem } from '@/types';
import MenuGrid from './MenuGrid';
import { IconType } from 'react-icons';

interface MenuTabsProps {
  starters: MenuItem[];
  mains: MenuItem[];
}

interface Tab {
  id: 'starters' | 'mains';
  label: string;
  icon: IconType;
}

const tabs: Tab[] = [
  { id: 'starters', label: 'Veg Starters', icon: FaSeedling },
  { id: 'mains', label: 'Veg Main Course', icon: FaUtensils },
];

export default function MenuTabs({ starters, mains }: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState<'starters' | 'mains'>('starters');

  const items = activeTab === 'starters' ? starters : mains;

  return (
    <div>
      {/* Tab bar */}
      <div className="mb-8 sm:mb-10 overflow-x-auto pb-1">
        <div className="inline-flex min-w-max items-center gap-2 bg-white rounded-2xl p-2 shadow-md mx-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-3 sm:px-5 py-3 rounded-xl font-semibold text-sm md:text-base transition-colors duration-200"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-2 ${
                    activeTab === tab.id ? 'text-white' : 'text-charcoal/70'
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* key forces full remount on tab change so the stagger animation replays */}
      <MenuGrid key={activeTab} items={items} />
    </div>
  );
}
