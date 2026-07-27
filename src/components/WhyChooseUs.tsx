import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/foodData';
import { ShieldCheck, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="whyus" className="py-20 relative bg-black/80 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>Uncompromising Quality</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Why Foodies Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">Mr. Fries</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Bringing culinary mastery and rich flavors to Dera Ismail Khan fast food lovers.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-gray-900/60 to-black/80 border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/15 group relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span>{item.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                {item.description}
              </p>

              {/* Accent bottom bar */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
