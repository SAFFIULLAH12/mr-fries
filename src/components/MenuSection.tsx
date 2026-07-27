import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Flame, Star, Plus, Check, SlidersHorizontal, Utensils } from 'lucide-react';
import { FOOD_MENU } from '../data/foodData';
import { FoodItem, CategoryId } from '../types';

interface MenuSectionProps {
  onAddToCart: (food: FoodItem) => void;
  onCustomizeItem: (food: FoodItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onCustomizeItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSpicyOnly, setFilterSpicyOnly] = useState(false);
  const [filterBestsellerOnly, setFilterBestsellerOnly] = useState(false);
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const categories: { id: CategoryId; label: string; icon: string }[] = [
    { id: 'all', label: 'All Items', icon: '🍽️' },
    { id: 'burgers', label: 'Burgers', icon: '🍔' },
    { id: 'pizza', label: 'Pizzas', icon: '🍕' },
    { id: 'fries', label: 'Fries & Sides', icon: '🍟' },
    { id: 'drinks', label: 'Coolers & Drinks', icon: '🥤' },
    { id: 'sandwiches', label: 'Wraps & Sandwiches', icon: '🥙' },
    { id: 'deals', label: 'Combos & Deals', icon: '🏷️' }
  ];

  const handleAdd = (food: FoodItem) => {
    onAddToCart(food);
    setAddedItemId(food.id);
    setTimeout(() => setAddedItemId(null), 1200);
  };

  const filteredFoods = FOOD_MENU.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpicy = filterSpicyOnly ? item.isSpicy : true;
    const matchesBestseller = filterBestsellerOnly ? item.isPopular : true;

    return matchesCategory && matchesSearch && matchesSpicy && matchesBestseller;
  });

  return (
    <section id="menu" className="py-20 relative bg-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-4 h-4 text-orange-500" />
            <span>Dera Ismail Khan Kitchen</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">Mr. Fries Online Menu</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Order online for fast delivery in D.I. Khan or browse items directly from our physical menu cards!
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-gray-950 p-4 rounded-3xl border border-white/10 shadow-xl">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search burgers, pizzas, drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/80 border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Quick Filter Toggles */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              onClick={() => setFilterSpicyOnly(!filterSpicyOnly)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                filterSpicyOnly
                  ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/30'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Spicy Only</span>
            </button>

            <button
              onClick={() => setFilterBestsellerOnly(!filterBestsellerOnly)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                filterBestsellerOnly
                  ? 'bg-amber-500 text-black border-amber-400 font-extrabold shadow-md'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
            >
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Bestsellers</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white border-red-500 shadow-xl shadow-red-600/30'
                  : 'bg-gray-950/80 text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        {filteredFoods.length === 0 ? (
          <div className="text-center py-16 bg-gray-950/60 rounded-3xl border border-white/10">
            <p className="text-gray-400 text-sm">No items found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterSpicyOnly(false);
                setFilterBestsellerOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredFoods.map((food) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-b from-gray-900/90 to-black rounded-3xl border border-white/10 hover:border-red-500/50 p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-gray-950">
                    <img
                      src={food.image}
                      alt={food.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {food.isSpicy && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-600/90 text-white font-bold text-[10px] uppercase flex items-center gap-1 shadow-lg">
                        <Flame className="w-3 h-3 text-amber-300" /> Spicy
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{food.rating.toFixed(1)}</span>
                      <span className="text-gray-500 font-normal">({food.reviewsCount})</span>
                    </div>
                    <span className="text-gray-400 text-[11px]">{food.calories} kcal</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{food.name}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-4 font-light leading-relaxed">
                    {food.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase">Price</span>
                    <div className="text-xl font-black text-white">Rs {food.price.toLocaleString()}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    {food.customizations && (
                      <button
                        onClick={() => onCustomizeItem(food)}
                        className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Build</span>
                      </button>
                    )}

                    <button
                      onClick={() => handleAdd(food)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        addedItemId === food.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-500 hover:to-orange-500 shadow-lg shadow-red-600/30'
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
                          <span>Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
