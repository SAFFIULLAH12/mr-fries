import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/foodData';

export const ReviewsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = CUSTOMER_REVIEWS[index];

  return (
    <section id="reviews" className="py-20 relative bg-black z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-4 h-4 text-amber-400" />
            <span>Real Local Guide Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What Foodies Say About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Mr. Fries</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-900 to-black p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl text-gray-200 font-light italic leading-relaxed mb-8 max-w-2xl">
                "{current.comment}"
              </p>

              {/* Avatar & Info */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-500 shadow-md"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1.5 font-bold text-white text-base">
                    <span>{current.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-xs text-gray-400">{current.role}</p>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md inline-block mt-1">
                    Ordered: {current.orderItem}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 sm:px-4 pointer-events-none">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + CUSTOMER_REVIEWS.length) % CUSTOMER_REVIEWS.length)}
              className="p-3 rounded-full bg-black/80 border border-white/20 text-white hover:bg-orange-600 transition-colors pointer-events-auto cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length)}
              className="p-3 rounded-full bg-black/80 border border-white/20 text-white hover:bg-orange-600 transition-colors pointer-events-auto cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
