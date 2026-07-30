import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowDown, Flame, Sparkles, Layers, RefreshCw, Check, Star } from 'lucide-react';
import { FoodItem } from '../types';

interface HeroSectionProps {
  onAddToCart: (food: FoodItem) => void;
}

interface IngredientTag {
  id: string;
  name: string;
  description: string;
  calories: number;
  icon: string;
  color: string;
  yOffset: number; // percentage vertical offset for exploded placement
  position: 'left' | 'right';
}

const INGREDIENTS: IngredientTag[] = [
  {
    id: 'top-bun',
    name: 'Glazed Brioche Crown',
    description: 'Golden toasted bun topped with white sesame',
    calories: 180,
    icon: '🍞',
    color: '#F59E0B',
    yOffset: -170,
    position: 'left'
  },
  {
    id: 'lava-sauce',
    name: 'Ghost Pepper Lava Mayo',
    description: 'House-made fiery smoky chilli drizzle',
    calories: 90,
    icon: '🌶️',
    color: '#EF4444',
    yOffset: -100,
    position: 'right'
  },
  {
    id: 'greens',
    name: 'Crisp Lettuce & Dill Pickles',
    description: 'Farm-fresh garden iceberg and sour pickles',
    calories: 25,
    icon: '🥬',
    color: '#10B981',
    yOffset: -10,
    position: 'left'
  },
  {
    id: 'cheddar',
    name: 'Melted Aged Cheddar',
    description: 'Rich gooey melted Wisconsin yellow cheese',
    calories: 110,
    icon: '🧀',
    color: '#FBBF24',
    yOffset: 60,
    position: 'right'
  },
  {
    id: 'crispy-fillet',
    name: 'Crispy Crunchy Fillet',
    description: 'Double-breaded 100% buttermilk chicken fillet',
    calories: 410,
    icon: '🍗',
    color: '#F97316',
    yOffset: 150,
    position: 'left'
  },
  {
    id: 'bottom-bun',
    name: 'Toasted Brioche Base',
    description: 'Butter-brushed crispy toasted bottom bun',
    calories: 150,
    icon: '🍔',
    color: '#D97706',
    yOffset: 210,
    position: 'right'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onAddToCart }) => {
  const [isExploded, setIsExploded] = useState(true);
  const [activeIngredient, setActiveIngredient] = useState<IngredientTag | null>(null);
  const [imageLoadedError, setImageLoadedError] = useState(false);

  // Primary image provided by user & local fallback
  const driveImageUrl = 'https://lh3.googleusercontent.com/d/1vkIaTtUlTFHDQJ3cFAiu6Ui9Xp_km2m_';
  const localFallbackUrl = '/src/assets/images/exploded_burger_hd_1784979096640.jpg';
  const burgerImgSrc = imageLoadedError ? localFallbackUrl : driveImageUrl;

  const heroFoodItem: FoodItem = {
    id: 'hero-supreme-zinger',
    name: 'Mr. Fries Special Zinger Burger',
    category: 'burgers',
    price: 480,
    originalPrice: 550,
    rating: 5.0,
    reviewsCount: 428,
    description: 'Crispy double-breaded chicken fillet marinated in secret spices, topped with iceberg, melted cheese & signature Mr. Fries sauce.',
    image: burgerImgSrc,
    calories: 890,
    prepTime: '10-12 min',
    isPopular: true,
    isSpicy: true
  };

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-16 min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#050505] text-[#F5F5F5]">
      {/* Ambient Fire Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FF4E00]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F27D26]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Top Hero Grid: Left Content & Right Sliding Exploded Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
          
          {/* Left Headline Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start text-left gap-6"
          >
            {/* AI Badge */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FF4E00]/20 border border-[#FF4E00]/30 rounded-full w-fit">
              <span className="w-2.5 h-2.5 bg-[#FF4E00] rounded-full animate-pulse"></span>
              <span className="text-[11px] font-black text-[#FF4E00] uppercase tracking-[0.2em]">Dera Ismail Khan Famous Fast Food</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.88] uppercase select-none">
              MR.<br />
              <span className="text-[#FF4E00]">FRIES</span><br />
              THE DELICIOUS HUB
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-md">
              Home of the famous <strong className="text-amber-400">1-Meter Pizza</strong>, crispy <strong className="text-white">Zinger Burgers</strong>, and irresistibly delicious <strong className="text-[#FF4E00]">Loaded Fries</strong> on North Circular Road!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#menu-cards"
                className="px-8 py-4 bg-gradient-to-r from-[#FF4E00] to-[#F27D26] rounded-2xl font-black text-sm sm:text-base text-white shadow-[0_15px_30px_rgba(255,78,0,0.35)] hover:scale-105 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>VIEW MENU CARDS</span>
              </a>

              <button
                onClick={() => onAddToCart(heroFoodItem)}
                className="px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-bold text-sm sm:text-base text-white hover:bg-white/10 hover:border-[#FF4E00]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ORDER ZINGER (Rs 480)</span>
                <Flame className="w-4 h-4 text-[#FF4E00]" />
              </button>
            </div>

            {/* Live Ratings & Stats */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#050505] bg-red-900/80 flex items-center justify-center text-xs font-bold text-white">🍟</div>
                <div className="w-9 h-9 rounded-full border-2 border-[#050505] bg-orange-900/80 flex items-center justify-center text-xs font-bold text-white">🍕</div>
                <div className="w-9 h-9 rounded-full border-2 border-[#050505] bg-amber-900/80 flex items-center justify-center text-xs font-bold text-white">🍔</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>5.0 / 5.0 Star Customer Favorite</span>
                </div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  Top Fast Food Destination in D.I. Khan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Burger Showcase with Labeled Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 w-full flex flex-col items-center justify-center relative min-h-[500px] sm:min-h-[560px] overflow-hidden sm:overflow-visible px-1"
          >
            {/* Top Floating Control Bar */}
            <div className="flex items-center gap-3 mb-4 z-30">
              <button
                onClick={() => setIsExploded(!isExploded)}
                className={`px-4 py-2 rounded-full font-extrabold text-xs flex items-center gap-2 transition-all cursor-pointer border shadow-lg ${
                  isExploded
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white border-red-400/60 shadow-red-600/30'
                    : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
                }`}
              >
                <Layers className="w-4 h-4 text-amber-300" />
                <span>{isExploded ? 'Burger Open (Ingredients Labeled)' : 'Click To Open & Label Ingredients'}</span>
              </button>
            </div>

            {/* Central Pure Floating Burger & Labeled Ingredients Stage */}
            <div className="relative w-full h-[460px] sm:h-[540px] flex items-center justify-center">
              
              {/* Background Ambient Glow Halo behind the burger */}
              <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-red-600/30 via-orange-500/20 to-amber-500/10 blur-3xl pointer-events-none animate-pulse" />

              {/* Seamless Floating Burger Main Image */}
              <motion.div
                animate={{
                  y: isExploded ? [0, -8, 0] : [0, -5, 0],
                  scale: isExploded ? 0.9 : 1.05,
                  rotate: isExploded ? [0, 1, 0, -1, 0] : 0
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 0.5 }
                }}
                className="relative z-20 w-60 h-60 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(255,78,0,0.35)] group cursor-pointer border-2 border-red-500/30"
                onClick={() => setIsExploded(!isExploded)}
              >
                <img
                  src={burgerImgSrc}
                  alt="Supreme Exploded Zinger Burger"
                  referrerPolicy="no-referrer"
                  onError={() => setImageLoadedError(true)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
              </motion.div>

              {/* Floating Labeled Ingredient Cards (When Exploded) */}
              <AnimatePresence>
                {isExploded &&
                  INGREDIENTS.map((ing, idx) => {
                    const isLeft = ing.position === 'left';
                    const isSelected = activeIngredient?.id === ing.id;

                    return (
                      <motion.div
                        key={ing.id}
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{
                          opacity: 1,
                          scale: isSelected ? 1.05 : 1,
                          x: 0,
                          y: ing.yOffset
                        }}
                        exit={{ opacity: 0, scale: 0.4 }}
                        transition={{
                          type: 'spring',
                          stiffness: 150,
                          damping: 18,
                          delay: idx * 0.06
                        }}
                        onMouseEnter={() => setActiveIngredient(ing)}
                        onMouseLeave={() => setActiveIngredient(null)}
                        className={`absolute z-30 flex items-center gap-1 sm:gap-2 cursor-pointer ${
                          isLeft
                            ? 'right-[50%] sm:right-[56%] flex-row-reverse text-right'
                            : 'left-[50%] sm:left-[56%] flex-row text-left'
                        }`}
                      >
                        {/* Glowing Connector Node */}
                        <div
                          className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.8)] animate-pulse shrink-0"
                          style={{ backgroundColor: ing.color }}
                        />

                        {/* Dashed / Solid Connector Line */}
                        <div
                          className="w-3 sm:w-12 h-[2px] bg-gradient-to-r from-red-500 to-amber-400 shrink-0"
                          style={{ backgroundColor: ing.color }}
                        />

                        {/* Floating Labeled Ingredient Badge Tag */}
                        <div
                          className={`p-1.5 sm:p-3 rounded-xl sm:rounded-2xl border backdrop-blur-2xl transition-all shadow-2xl max-w-[125px] sm:max-w-[200px] ${
                            isSelected
                              ? 'bg-red-950/95 border-red-400 text-white shadow-red-500/60 scale-105 ring-2 ring-red-400'
                              : 'bg-black/90 border-white/20 text-gray-200 hover:border-white/50 hover:bg-black'
                          }`}
                        >
                          <div className="flex items-center gap-1 font-black text-[10px] sm:text-sm text-white">
                            <span className="text-xs sm:text-base">{ing.icon}</span>
                            <span className="truncate">{ing.name}</span>
                          </div>
                          <p className="hidden sm:block text-[10px] sm:text-[11px] text-gray-300 mt-0.5 line-clamp-1 leading-tight">
                            {ing.description}
                          </p>
                          <div className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[8px] sm:text-[9px] font-extrabold text-amber-400">
                            <Flame className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-orange-500" />
                            <span>{ing.calories} kcal</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </div>

            {/* Floating Order Button directly below floating burger */}
            <div className="mt-4 z-30 flex items-center gap-4">
              <button
                onClick={() => onAddToCart(heroFoodItem)}
                className="px-8 py-3.5 bg-gradient-to-r from-[#FF4E00] via-orange-600 to-amber-500 text-white font-black text-sm rounded-2xl shadow-[0_15px_30px_rgba(255,78,0,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>ADD TO CART ($12.99)</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="w-full flex justify-center z-10 mt-8">
        <a
          href="#featured"
          className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#FF4E00]/50 transition-colors animate-bounce"
        >
          <ArrowDown className="w-4 h-4 text-[#FF4E00]" />
        </a>
      </div>
    </section>
  );
};




