import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Flame, ShoppingBag, Plus, Minus, SlidersHorizontal } from 'lucide-react';
import { FoodItem, CustomizationOption, CartItem } from '../types';

interface ItemCustomizerModalProps {
  food: FoodItem | null;
  onClose: () => void;
  onAddToCartCustomized: (cartItem: CartItem) => void;
}

export const ItemCustomizerModal: React.FC<ItemCustomizerModalProps> = ({
  food,
  onClose,
  onAddToCartCustomized
}) => {
  if (!food) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedBun, setSelectedBun] = useState<string>(
    food.customizations?.buns?.[0]?.id || ''
  );
  const [selectedPatty, setSelectedPatty] = useState<string>(
    food.customizations?.patties?.[0]?.id || ''
  );
  const [selectedCheese, setSelectedCheese] = useState<string>(
    food.customizations?.cheeses?.[0]?.id || ''
  );
  const [selectedSauce, setSelectedSauce] = useState<string>(
    food.customizations?.sauces?.[0]?.id || ''
  );
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Calculate total unit price including options
  let optionsPrice = 0;

  if (food.customizations) {
    const bunOpt = food.customizations.buns?.find((b) => b.id === selectedBun);
    const pattyOpt = food.customizations.patties?.find((p) => p.id === selectedPatty);
    const cheeseOpt = food.customizations.cheeses?.find((c) => c.id === selectedCheese);
    const sauceOpt = food.customizations.sauces?.find((s) => s.id === selectedSauce);

    if (bunOpt) optionsPrice += bunOpt.price;
    if (pattyOpt) optionsPrice += pattyOpt.price;
    if (cheeseOpt) optionsPrice += cheeseOpt.price;
    if (sauceOpt) optionsPrice += sauceOpt.price;

    selectedExtras.forEach((exId) => {
      const exOpt = food.customizations?.extras?.find((e) => e.id === exId);
      if (exOpt) optionsPrice += exOpt.price;
    });
  }

  const unitPrice = food.price + optionsPrice;
  const itemTotal = unitPrice * quantity;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfirmAdd = () => {
    const cartItem: CartItem = {
      cartId: `${food.id}-${Date.now()}`,
      food,
      quantity,
      selectedOptions: {
        bun: food.customizations?.buns?.find((b) => b.id === selectedBun)?.name,
        patty: food.customizations?.patties?.find((p) => p.id === selectedPatty)?.name,
        cheese: food.customizations?.cheeses?.find((c) => c.id === selectedCheese)?.name,
        sauce: food.customizations?.sauces?.find((s) => s.id === selectedSauce)?.name,
        extras: selectedExtras
          .map((exId) => food.customizations?.extras?.find((e) => e.id === exId)?.name)
          .filter(Boolean) as string[]
      },
      itemTotal,
      specialInstructions
    };

    onAddToCartCustomized(cartItem);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-gray-900 via-black to-gray-950 border border-red-500/30 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto my-auto text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/10">
            <img
              src={food.image}
              alt={food.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-white/10 shadow-lg"
            />
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full mb-1">
                <SlidersHorizontal className="w-3 h-3" /> Customizer
              </div>
              <h3 className="text-xl sm:text-2xl font-black">{food.name}</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">{food.description}</p>
            </div>
          </div>

          {/* Customization Groups */}
          <div className="space-y-6">
            {/* Buns */}
            {food.customizations?.buns && (
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">1. Select Bun Type</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {food.customizations.buns.map((bun) => (
                    <button
                      key={bun.id}
                      onClick={() => setSelectedBun(bun.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        selectedBun === bun.id
                          ? 'border-red-500 bg-red-950/60 font-bold text-white shadow-lg shadow-red-500/20'
                          : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{bun.name}</span>
                        {bun.price > 0 && <span className="text-amber-400">+${bun.price.toFixed(2)}</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Patties */}
            {food.customizations?.patties && (
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">2. Select Patty Stack</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {food.customizations.patties.map((patty) => (
                    <button
                      key={patty.id}
                      onClick={() => setSelectedPatty(patty.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        selectedPatty === patty.id
                          ? 'border-red-500 bg-red-950/60 font-bold text-white shadow-lg shadow-red-500/20'
                          : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{patty.name}</span>
                        {patty.price > 0 && <span className="text-amber-400">+${patty.price.toFixed(2)}</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sauces */}
            {food.customizations?.sauces && (
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">3. Choose Signature Sauce</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {food.customizations.sauces.map((sauce) => (
                    <button
                      key={sauce.id}
                      onClick={() => setSelectedSauce(sauce.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        selectedSauce === sauce.id
                          ? 'border-red-500 bg-red-950/60 font-bold text-white shadow-lg shadow-red-500/20'
                          : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{sauce.name}</span>
                        {sauce.price > 0 && <span className="text-amber-400">+${sauce.price.toFixed(2)}</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Extras */}
            {food.customizations?.extras && (
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">4. Add Delicious Extras</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {food.customizations.extras.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.id);
                    return (
                      <button
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-orange-500 bg-orange-950/60 font-bold text-white shadow-lg shadow-orange-500/20'
                            : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <span>{extra.name}</span>
                        <span className="text-amber-400">+${extra.price.toFixed(2)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special Instructions Input */}
            <div>
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Kitchen Special Notes</h4>
              <input
                type="text"
                placeholder="e.g. Extra crisp bacon, no onions, sauce on the side..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Footer Quantity & Total */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 bg-black/60 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold px-3">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleConfirmAdd}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-red-600/30 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Custom Item (${itemTotal.toFixed(2)})</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
