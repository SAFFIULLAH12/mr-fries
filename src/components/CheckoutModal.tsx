import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Clock, MapPin, Phone, CreditCard, DollarSign, Flame, Truck, PackageCheck, ChefHat, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, OrderDetails } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountPercentage: number;
  onOrderPlaced: (order: OrderDetails) => void;
  activeOrder: OrderDetails | null;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountPercentage,
  onOrderPlaced,
  activeOrder
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'applepay'>('cash');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.itemTotal, 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  const deliveryFee = subtotal > 25 ? 0 : 3.99;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: OrderDetails = {
      orderId: `FB-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName: name || 'Valued Foodie',
      phone: phone || '+1 (555) 234-5678',
      address: address || '123 Main Street, Suite 4B',
      notes,
      paymentMethod,
      items,
      subtotal,
      deliveryFee,
      discount: discountAmount,
      total,
      estimatedDeliveryTime: '22-25 mins',
      status: 'confirmed',
      createdAt: new Date()
    };

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    onOrderPlaced(newOrder);
  };

  const steps = [
    { key: 'confirmed', label: 'Order Placed', icon: PackageCheck, desc: 'Verified & sent to kitchen' },
    { key: 'preparing', label: 'Chef Preparing', icon: ChefHat, desc: 'Slicing fresh ingredients' },
    { key: 'cooking', label: 'Flame Cooking', icon: Flame, desc: 'Grilling on charcoal' },
    { key: 'delivering', label: 'Out for Delivery', icon: Truck, desc: 'Thermal dispatch rider' },
    { key: 'delivered', label: 'Delivered Hot', icon: CheckCircle2, desc: 'Bon Appétit!' }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-gray-950 via-black to-gray-950 border border-red-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Render Active Order Status Tracker IF order already placed */}
          {activeOrder ? (
            <div className="py-4">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-green-400 animate-spin" />
                  <span>Live Order Dispatch Status</span>
                </div>
                <h3 className="text-2xl font-black">Order #{activeOrder.orderId}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Estimated Delivery: <span className="text-amber-400 font-bold">{activeOrder.estimatedDeliveryTime}</span>
                </p>
              </div>

              {/* Progress Steps Timeline */}
              <div className="space-y-6 my-8">
                {steps.map((st, i) => {
                  const isCurrent = activeOrder.status === st.key;
                  const isDone = i <= steps.findIndex((s) => s.key === activeOrder.status);

                  return (
                    <div key={st.key} className="flex items-start gap-4 relative">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center border z-10 ${
                          isDone
                            ? 'bg-gradient-to-tr from-red-600 to-orange-500 border-red-500 text-white shadow-lg shadow-red-500/30'
                            : 'bg-gray-900 border-white/10 text-gray-500'
                        }`}
                      >
                        <st.icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 pb-4 border-b border-white/5">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-bold text-sm ${isDone ? 'text-white' : 'text-gray-500'}`}>
                            {st.label}
                          </h4>
                          {isCurrent && (
                            <span className="text-[10px] bg-red-600/30 text-red-300 px-2 py-0.5 rounded-full border border-red-500/40 animate-pulse">
                              In Progress
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">{st.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary Details Box */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs space-y-2 mb-6">
                <div className="flex justify-between font-bold text-white">
                  <span>Customer:</span>
                  <span>{activeOrder.customerName}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Address:</span>
                  <span>{activeOrder.address}</span>
                </div>
                <div className="flex justify-between font-extrabold text-amber-400 pt-2 border-t border-white/10">
                  <span>Total Paid:</span>
                  <span>${activeOrder.total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Close & Return To App
              </button>
            </div>
          ) : (
            /* Checkout Input Form */
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              <div className="pb-4 border-b border-white/10">
                <h3 className="text-2xl font-black">Express Checkout</h3>
                <p className="text-xs text-gray-400">Provide delivery details for instant smart kitchen dispatch.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">Delivery Address</label>
                <input
                  type="text"
                  required
                  placeholder="Apartment, Street Address, City..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-2">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'cash'
                        ? 'border-red-500 bg-red-950/60 text-white shadow-lg shadow-red-500/20'
                        : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span>Cash on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-red-500 bg-red-950/60 text-white shadow-lg shadow-red-500/20'
                        : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-amber-400" />
                    <span>Credit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'applepay'
                        ? 'border-red-500 bg-red-950/60 text-white shadow-lg shadow-red-500/20'
                        : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    <span>Apple Pay</span>
                  </button>
                </div>
              </div>

              {/* Order Total Summary */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal ({items.length} items):</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Delivery Fee:</span>
                  <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-400 font-bold">
                    <span>Discount:</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                  <span>Total Amount Due:</span>
                  <span className="text-amber-400">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-red-600/40 hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm & Place Order (${total.toFixed(2)})</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
