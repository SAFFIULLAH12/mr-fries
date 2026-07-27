import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Flame, ShoppingBag, Plus, Eye, Check, SlidersHorizontal } from 'lucide-react';
import { FOOD_MENU } from '../data/foodData';
import { FoodItem } from '../types';

interface FeaturedFoodsProps {
  onAddToCart: (food: FoodItem) => void;
  onCustomizeItem?: (food: FoodItem) => void;
}

export const FeaturedFoods: React.FC<FeaturedFoodsProps> = ({ onAddToCart, onCustomizeItem }) => {
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const handleAdd = (food: FoodItem) => {
    onAddToCart(food);
    setAddedItemId(food.id);
    setTimeout(() => setAddedItemId(null), 1200);
  };

  return (
    <section id="featured" className="py-20 relative bg-black/60 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>Handcrafted Chef Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Signature Foods</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Made with 100% prime ingredients, flame-grilled perfection, and served fresh with our signature secret sauces.
          </p>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FOOD_MENU.slice(0, 8).map((food, idx) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-gradient-to-b from-gray-900/80 to-black/90 rounded-3xl border border-white/10 hover:border-red-500/50 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container with Badges */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-4 bg-gray-950">
                <img
                  src={food.image}
                  alt={food.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Top Left Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  {food.isSpicy && (
                    <span className="px-2.5 py-1 rounded-full bg-red-600/90 text-white font-bold text-[10px] uppercase flex items-center gap-1 shadow-lg backdrop-blur-md">
                      <Flame className="w-3 h-3 text-amber-300 fill-amber-300" /> Spicy
                    </span>
                  )}
                  {food.isPopular && (
                    <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-[10px] uppercase shadow-lg">
                      🔥 Bestseller
                    </span>
                  )}
                </div>

                {/* Top Right Discount Badge */}
                {food.originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-lg z-10">
                    SAVE Rs {food.originalPrice - food.price}
                  </div>
                )}
              </div>

              {/* Card Body Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating & Prep Time */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{food.rating.toFixed(1)}</span>
                      <span className="text-gray-500 font-normal">({food.reviewsCount})</span>
                    </div>

                    <span className="text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      ⏱️ {food.prepTime}
                    </span>
                  </div>

                  {/* Food Name */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-orange-400 transition-colors">
                    {food.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed font-light">
                    {food.description}
                  </p>
                </div>

                {/* Price & Action Buttons */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Price</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-white">Rs {food.price.toLocaleString()}</span>
                      {food.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">Rs {food.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Customize Button if available */}
                    {onCustomizeItem && food.customizations && (
                      <button
                        onClick={() => onCustomizeItem(food)}
                        title="Customize Burger Options"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                      </button>
                    )}

                    {/* Add To Cart */}
                    <button
                      onClick={() => handleAdd(food)}
                      className={`px-3.5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                        addedItemId === food.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-500 hover:to-orange-500 shadow-md shadow-red-600/30 active:scale-95'
                      }`}
                    >
                      {addedItemId === food.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
