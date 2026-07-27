import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Tag, Clock, Copy, Check, Flame, Gift, Sparkles } from 'lucide-react';

interface OffersSectionProps {
  onApplyPromoCode?: (code: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onApplyPromoCode }) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 3, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const promoCode = 'FASTBITE30';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    if (onApplyPromoCode) onApplyPromoCode(promoCode);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="offers" className="py-20 relative bg-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-red-950 via-black to-orange-950 border border-red-500/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Gift className="w-4 h-4 text-orange-400" />
                <span>Limited Time Daily Special Offer</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-none">
                FLAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-500">30% OFF</span> + FREE DELIVERY
              </h2>

              <p className="text-gray-300 text-sm sm:text-base font-light mb-6">
                Claim your exclusive AI welcome discount code on your first order. Applies to all Gourmet Burgers, Wood-Fired Pizzas & Combos!
              </p>

              {/* Countdown Timer */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mr-2">
                  <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Ends In:</span>
                </div>

                <div className="flex items-center gap-2 text-white font-black text-lg sm:text-2xl">
                  <span className="bg-black/80 px-3 py-1.5 rounded-xl border border-white/10 shadow-md">
                    {String(timeLeft.hours).padStart(2, '0')}h
                  </span>
                  <span className="text-red-500">:</span>
                  <span className="bg-black/80 px-3 py-1.5 rounded-xl border border-white/10 shadow-md">
                    {String(timeLeft.minutes).padStart(2, '0')}m
                  </span>
                  <span className="text-red-500">:</span>
                  <span className="bg-black/80 px-3 py-1.5 rounded-xl border border-white/10 shadow-md">
                    {String(timeLeft.seconds).padStart(2, '0')}s
                  </span>
                </div>
              </div>

              {/* Coupon Box */}
              <div className="flex flex-wrap items-center gap-3 bg-black/80 p-2.5 rounded-2xl border border-dashed border-red-500/50 w-full sm:w-auto">
                <span className="text-xs text-gray-400 px-2 font-mono">CODE:</span>
                <span className="text-base font-black text-amber-400 font-mono tracking-wider">
                  {promoCode}
                </span>
                <button
                  onClick={handleCopyCode}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    copied
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-500 hover:to-orange-500'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied & Applied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Claim Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Showcase Box */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xl">
                  🎁
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Buy 1 Get 1 Free Pizza</h4>
                  <p className="text-xs text-gray-400">Valid on every Tuesday & Friday night orders</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xl">
                  🚀
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Free Delivery Guarantee</h4>
                  <p className="text-xs text-gray-400">On all orders above $25 within 5 km radius</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
