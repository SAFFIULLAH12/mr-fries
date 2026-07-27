import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Flame, ShoppingBag, Trophy } from 'lucide-react';
import { BEST_SELLERS } from '../data/foodData';
import { FoodItem } from '../types';

interface BestSellersProps {
  onAddToCart: (food: FoodItem) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BEST_SELLERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + BEST_SELLERS.length) % BEST_SELLERS.length);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % BEST_SELLERS.length);
  };

  const currentFood = BEST_SELLERS[currentIndex];

  return (
    <section id="bestsellers" className="py-20 relative bg-gradient-to-b from-black via-red-950/20 to-black z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Most Popular Choice</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Best Sellers <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Hall of Fame</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 text-white hover:bg-orange-500/20 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 text-white hover:bg-orange-500/20 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-black rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFood.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Image Showcase */}
              <div className="lg:col-span-6 relative group">
                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={currentFood.image}
                    alt={currentFood.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating Rank Tag */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-black" />
                    <span>#1 TOP SELLER</span>
                  </div>
                </div>
              </div>

              {/* Right Content Showcase */}
              <div className="lg:col-span-6 flex flex-col items-start justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{currentFood.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-400 text-xs">({currentFood.reviewsCount}+ verified reviews)</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight leading-snug">
                  {currentFood.name}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base font-light mb-6 leading-relaxed">
                  {currentFood.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-300">
                    <span className="text-gray-500 block text-[10px] uppercase">Calories</span>
                    <span className="font-bold text-amber-400 text-sm">{currentFood.calories} kcal</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-300">
                    <span className="text-gray-500 block text-[10px] uppercase">Prep Time</span>
                    <span className="font-bold text-orange-400 text-sm">{currentFood.prepTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full pt-6 border-t border-white/10">
                  <div>
                    <span className="text-xs text-gray-400 block uppercase tracking-wider">Special Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white">Rs {currentFood.price.toLocaleString()}</span>
                      {currentFood.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">Rs {currentFood.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(currentFood)}
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white font-extrabold text-sm hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-red-600/30 flex items-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add To Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {BEST_SELLERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-orange-500' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
