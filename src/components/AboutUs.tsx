import React from 'react';
import { motion } from 'motion/react';
import { Award, HeartHandshake, Flame, Sparkles, ChefHat, Users, ShoppingBag, Star } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Award, color: 'text-orange-400' },
    { label: 'Happy Foodies', value: '250K+', icon: Users, color: 'text-amber-400' },
    { label: 'Orders Completed', value: '500K+', icon: ShoppingBag, color: 'text-red-400' },
    { label: 'Average Rating', value: '4.9 ★', icon: Star, color: 'text-amber-300' }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-black via-gray-950 to-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="FastBite Kitchen"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Floating Chef Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Chef Marco Vance</h4>
                  <p className="text-xs text-gray-400">Head Executive Culinary Director</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>Mr. Fries Story & Legacy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Dera Ismail Khan's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">Favorite Fast Food Hub</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              Located on North Circular Road, <strong>Mr. Fries</strong> is renowned across Dera Ismail Khan for serving mouth-watering Zinger Burgers, delicious Loaded Fries, and our famous <strong>1-Meter Giant Pizza</strong>.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
              Whether you are hanging out with friends, enjoying a family night out, or ordering food online to your doorstep, Mr. Fries guarantees top quality, generous portions, and economical prices every single time!
            </p>

            {/* Live Counter Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/10">
              {stats.map((st, i) => (
                <div key={i} className="flex flex-col items-start bg-white/5 p-3.5 rounded-2xl border border-white/5">
                  <st.icon className={`w-5 h-5 mb-1 ${st.color}`} />
                  <span className="text-2xl font-black text-white">{st.value}</span>
                  <span className="text-[11px] text-gray-400 mt-0.5">{st.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
