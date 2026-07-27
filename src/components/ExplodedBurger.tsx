import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BURGER_PRESETS } from '../data/foodData';
import { BurgerPreset, FoodItem } from '../types';
import { Sparkles, Layers, ShoppingBag, Flame, Sliders, RefreshCw, CheckCircle2 } from 'lucide-react';

interface ExplodedBurgerProps {
  onAddToCart: (food: FoodItem) => void;
}

export const ExplodedBurger: React.FC<ExplodedBurgerProps> = ({ onAddToCart }) => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [isExploded, setIsExploded] = useState(true);
  const [activeLayerId, setActiveLayerId] = useState<string | null>(null);
  const [explosionGap, setExplosionGap] = useState(1.0); // 0.6 to 1.4
  const [imgError, setImgError] = useState(false);

  const currentPreset: BurgerPreset = BURGER_PRESETS[selectedPresetIndex];
  
  // Primary image URL provided by user or fallback
  const primaryImgUrl = currentPreset.image || 'https://lh3.googleusercontent.com/d/1vkIaTtUlTFHDQJ3cFAiu6Ui9Xp_km2m_';
  const fallbackImgUrl = '/src/assets/images/exploded_burger_hd_1784979096640.jpg';
  const burgerImgSrc = imgError ? fallbackImgUrl : primaryImgUrl;

  const handleAddToCart = () => {
    const customFood: FoodItem = {
      id: `custom-preset-${currentPreset.id}-${Date.now()}`,
      name: currentPreset.name,
      category: 'burgers',
      price: currentPreset.price,
      rating: 5.0,
      reviewsCount: 150,
      description: currentPreset.subtitle,
      image: burgerImgSrc,
      calories: currentPreset.calories,
      prepTime: '10-12 min'
    };
    onAddToCart(customFood);
  };

  return (
    <div className="relative w-full min-h-[660px] flex flex-col justify-between items-center bg-gradient-to-b from-black/90 via-red-950/25 to-black/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-red-500/30 shadow-[0_20px_50px_rgba(255,78,0,0.15)] overflow-hidden group">
      {/* Background Neon Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-gradient-to-r from-red-600/20 via-orange-500/15 to-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-20 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Interactive Exploded Burger View</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
            {currentPreset.name}
            <span className="text-red-500 text-xl sm:text-2xl font-extrabold">${currentPreset.price.toFixed(2)}</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-lg mt-0.5">{currentPreset.subtitle}</p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 bg-black/70 p-1.5 rounded-2xl border border-white/10 overflow-x-auto max-w-full">
          {BURGER_PRESETS.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedPresetIndex(idx);
                setIsExploded(true);
                setImgError(false);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedPresetIndex === idx
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-600/40 scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {preset.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative w-full flex-1 flex flex-col lg:flex-row items-center justify-center min-h-[420px] my-4 z-10 gap-8">
        
        {/* Left/Center Visual Feature Container */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full max-w-3xl">
          
          {/* Main Photo Card Display */}
          <div className="relative mb-6 z-20">
            <motion.div
              animate={{
                scale: isExploded ? 0.95 : 1.02,
                y: [0, -6, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.5 }
              }}
              className="relative w-48 sm:w-64 h-36 sm:h-48 rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.8)] bg-black/80 group/img cursor-pointer"
              onClick={() => setIsExploded(!isExploded)}
            >
              <img
                src={burgerImgSrc}
                alt={currentPreset.name}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white font-bold bg-black/60 px-2.5 py-1 rounded-xl backdrop-blur-md border border-white/10">
                <span className="flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-500" />
                  {currentPreset.calories} kcal
                </span>
                <span className="text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {isExploded ? 'Burger Open' : 'Click to Open'}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Vertical Stack Layer Breakdown (When Exploded vs Closed) */}
          <div className="relative w-full max-w-2xl flex flex-col items-center justify-center min-h-[320px] py-4">
            <div className="relative w-full sm:w-80 h-[340px] flex flex-col items-center justify-center">
              {currentPreset.layers.map((layer, index) => {
                const totalLayers = currentPreset.layers.length;
                const collapsedY = (index - totalLayers / 2) * 14;
                const targetY = isExploded ? layer.yOffsetExpanded * explosionGap * 0.85 : collapsedY;
                const isHovered = activeLayerId === layer.id;
                const isLeft = layer.tagPosition === 'left';

                return (
                  <motion.div
                    key={`${currentPreset.id}-${layer.id}`}
                    initial={{ y: 150, opacity: 0 }}
                    animate={{
                      y: targetY,
                      opacity: activeLayerId && !isHovered ? 0.35 : 1,
                      scale: isHovered ? 1.06 : 1,
                      zIndex: isHovered ? 50 : totalLayers - index
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 130,
                      damping: 17,
                      delay: index * 0.03
                    }}
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    onMouseLeave={() => setActiveLayerId(null)}
                    className="absolute cursor-pointer flex items-center justify-center w-full"
                  >
                    {/* Layer Bar Container */}
                    <div
                      className={`relative w-60 sm:w-72 h-11 sm:h-13 rounded-2xl flex items-center justify-between px-3.5 sm:px-4 transition-all duration-300 border backdrop-blur-md shadow-xl ${
                        isHovered
                          ? 'border-red-400 bg-red-950/80 shadow-red-500/50 scale-105'
                          : 'border-white/15 bg-gradient-to-r from-gray-900/90 via-black/85 to-gray-900/90 shadow-black/80'
                      }`}
                      style={{
                        boxShadow: isHovered
                          ? `0 0 30px ${layer.color}88`
                          : '0 8px 16px -4px rgba(0,0,0,0.7)'
                      }}
                    >
                      {/* Left Icon & Name */}
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl sm:text-2xl filter drop-shadow">{layer.imageOrIcon}</span>
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                            {layer.name}
                          </span>
                          <span className="text-[10px] text-gray-400 font-medium">{layer.flavorProfile}</span>
                        </div>
                      </div>

                      {/* Calorie Tag */}
                      <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-black/50 px-2 py-0.5 rounded-full border border-amber-500/20">
                        <Flame className="w-3 h-3 text-orange-500" />
                        <span>{layer.calories} cal</span>
                      </div>

                      {/* Glowing Accent Bar */}
                      <div
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ backgroundColor: layer.color }}
                      />
                    </div>

                    {/* Side Pointer Line & Labeled Callout Tag */}
                    <AnimatePresence>
                      {isExploded && (
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? 15 : -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className={`absolute hidden md:flex items-center gap-2 w-52 sm:w-60 pointer-events-auto ${
                            isLeft
                              ? 'right-full mr-3 flex-row-reverse text-right'
                              : 'left-full ml-3 flex-row text-left'
                          }`}
                        >
                          {/* Connector Line */}
                          <div
                            className="h-[1px] flex-1 bg-gradient-to-r from-red-500/60 to-amber-500/50 border-b border-dashed"
                            style={{ borderColor: layer.color }}
                          />

                          {/* Labeled Ingredient Card */}
                          <div
                            onClick={() => setActiveLayerId(layer.id)}
                            className={`p-2.5 rounded-xl border backdrop-blur-xl transition-all cursor-pointer ${
                              isHovered
                                ? 'bg-red-950/90 border-red-400 text-white shadow-lg shadow-red-500/40 scale-105'
                                : 'bg-black/80 border-white/15 text-gray-300 hover:border-white/30 hover:bg-black/90'
                            }`}
                          >
                            <div className="font-extrabold text-white text-xs flex items-center gap-1.5 justify-between">
                              <span>{layer.name}</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-amber-300">
                                {layer.imageOrIcon}
                              </span>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-tight">
                              {layer.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Hovered Ingredient Details Banner */}
      <AnimatePresence>
        {activeLayerId && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-full max-w-xl mb-3 bg-red-950/90 border border-red-500/50 rounded-2xl p-3.5 flex items-center justify-between text-xs text-white shadow-2xl backdrop-blur-xl z-30"
          >
            {(() => {
              const layer = currentPreset.layers.find((l) => l.id === activeLayerId);
              if (!layer) return null;
              return (
                <div className="flex items-center gap-3 w-full">
                  <span className="text-3xl">{layer.imageOrIcon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-amber-300 text-sm flex items-center gap-2">
                      {layer.name}
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                        {layer.calories} kcal
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                        {layer.flavorProfile}
                      </span>
                    </div>
                    <p className="text-gray-300 text-[11px] mt-0.5">{layer.description}</p>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Control Bar */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 z-20">
        
        {/* Toggle Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all border cursor-pointer ${
              isExploded
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white border-red-400 shadow-lg shadow-red-600/30'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-300" />
            <span>{isExploded ? '🔒 Close Burger' : '🍔 Open Burger (Explode)'}</span>
          </button>

          {isExploded && (
            <div className="hidden sm:flex items-center gap-2 bg-black/60 px-3 py-2 rounded-xl border border-white/10 text-xs text-gray-400">
              <Sliders className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px]">Gap:</span>
              <input
                type="range"
                min="0.6"
                max="1.3"
                step="0.1"
                value={explosionGap}
                onChange={(e) => setExplosionGap(parseFloat(e.target.value))}
                className="w-20 accent-red-500 cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* Nutritional Summary & Order Button */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-3 text-xs">
            <div className="flex flex-col text-right">
              <span className="text-gray-400 text-[10px] uppercase font-bold">Total Calories</span>
              <span className="font-black text-amber-400 text-sm flex items-center gap-1 justify-end">
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                {currentPreset.calories} kcal
              </span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white font-black text-xs sm:text-sm hover:from-red-500 hover:to-orange-500 shadow-xl shadow-red-600/40 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order This Burger (${currentPreset.price.toFixed(2)})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
