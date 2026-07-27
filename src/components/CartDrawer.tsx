import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Check, Flame } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, qty: number) => void;
  onRemoveItem: (cartId: string) => void;
  onProceedToCheckout: () => void;
  appliedPromoCode: string;
  onApplyPromoCode: (code: string) => void;
  discountPercentage: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  appliedPromoCode,
  onApplyPromoCode,
  discountPercentage
}) => {
  const [promoInput, setPromoInput] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.itemTotal, 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  const deliveryFee = subtotal > 25 ? 0 : subtotal > 0 ? 3.99 : 0;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      onApplyPromoCode(promoInput.trim());
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-gradient-to-b from-gray-950 via-black to-gray-950 border-l border-red-500/30 text-white p-6 flex flex-col justify-between shadow-2xl"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-black">Your FastBite Cart</h3>
                <span className="text-xs bg-red-600 px-2 py-0.5 rounded-full font-bold">
                  {items.reduce((acc, i) => acc + i.quantity, 0)}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mb-4 stroke-1" />
                  <p className="text-base font-bold text-white mb-1">Your cart is empty</p>
                  <p className="text-xs text-gray-500 mb-6 max-w-xs">
                    Explore our menu and add your favorite gourmet burgers or pizzas!
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xs cursor-pointer"
                  >
                    Browse Menu Now
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.cartId}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-3 relative group"
                  >
                    <img
                      src={item.food.image}
                      alt={item.food.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover border border-white/10"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-white leading-tight line-clamp-1">
                            {item.food.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.cartId)}
                            className="text-gray-500 hover:text-red-400 p-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Selected Customizations summary */}
                        {item.selectedOptions && (
                          <div className="text-[10px] text-gray-400 mt-1 space-y-0.5">
                            {item.selectedOptions.bun && <div>• Bun: {item.selectedOptions.bun}</div>}
                            {item.selectedOptions.patty && <div>• Patty: {item.selectedOptions.patty}</div>}
                            {item.selectedOptions.extras && item.selectedOptions.extras.length > 0 && (
                              <div>• Extras: {item.selectedOptions.extras.join(', ')}</div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/5">
                        <span className="text-sm font-extrabold text-amber-400">
                          Rs {item.itemTotal.toLocaleString()}
                        </span>

                        <div className="flex items-center gap-2 bg-black/60 px-2 py-1 rounded-xl border border-white/10 text-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                            className="text-gray-400 hover:text-white cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-white px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                            className="text-gray-400 hover:text-white cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer Calculations & Checkout Button */}
            {items.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. FASTBITE30)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {appliedPromoCode && (
                  <div className="text-xs text-green-400 flex items-center justify-between bg-green-500/10 p-2 rounded-xl border border-green-500/20">
                    <span>Applied Code: {appliedPromoCode} ({discountPercentage}% OFF)</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Subtotal, Discount, Delivery, Total */}
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs {subtotal.toLocaleString()}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({discountPercentage}%)</span>
                      <span>-Rs {discountAmount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `Rs ${deliveryFee.toLocaleString()}`}</span>
                  </div>

                  <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span className="text-amber-400">Rs {total.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onProceedToCheckout();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-red-600/30 hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Proceed To Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
