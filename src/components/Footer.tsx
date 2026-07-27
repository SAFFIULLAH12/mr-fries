import React, { useState } from 'react';
import { Flame, Mail, Phone, MapPin, Send, Check, Heart, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-red-600 to-orange-500 p-0.5 shadow-lg shadow-red-600/40">
                <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-lg">
                  🍟
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-wider">
                MR. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">FRIES</span>
              </span>
            </a>

            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              The premier fast food destination in Dera Ismail Khan! Famous for Zinger Burgers, 1-Meter Pizza, Loaded Fries & Family Deals on North Circular Road.
            </p>

            {/* Hours & Contact Badge */}
            <div className="space-y-2 mt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span>Open Daily • D.I. Khan Delivery</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href="mailto:afnaank55@gmail.com" className="hover:text-amber-400 transition-colors font-medium">
                    afnaank55@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href="tel:03212158262" className="hover:text-orange-400 transition-colors font-medium">
                    0321 2158262
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                  <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                  <a
                    href="https://www.instagram.com/mr_fries_mr_fries"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-400 transition-colors font-bold text-pink-400 flex items-center gap-1"
                  >
                    <span>@mr_fries_mr_fries</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current text-cyan-400 shrink-0" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.33 6.33 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 4.67 1.47V7.07a4.85 4.85 0 0 1-.75-.38z"/>
                  </svg>
                  <a
                    href="https://www.tiktok.com/@mr.fries65"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition-colors font-bold text-cyan-400 flex items-center gap-1"
                  >
                    <span>@mr.fries65</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#hero" className="hover:text-orange-400 transition-colors">Home Stage</a></li>
              <li><a href="#menu-cards" className="hover:text-orange-400 transition-colors">Menu Cards</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Online Menu</a></li>
              <li><a href="#reviews" className="hover:text-orange-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#gallery" className="hover:text-orange-400 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-4">Popular Items</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Special Zinger Burger</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">1-Meter Specialty Pizza</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Mr. Fries Loaded Fries</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Crispy Fried Chicken</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Family Mega Deals</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-3">Get Special Discounts</h4>
            <p className="text-xs text-gray-400 font-light mb-4">
              Subscribe to get instant promo codes & special family deal notifications.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 mb-3">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xs rounded-2xl transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-green-400 bg-green-500/10 p-2 rounded-xl border border-green-500/20">
                🎉 Subscribed! Welcome to Mr. Fries D.I. Khan family!
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mr. Fries - North Circular Road, Dera Ismail Khan. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/mr_fries_mr_fries" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-1">
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@mr.fries65" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.33 6.33 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 4.67 1.47V7.07a4.85 4.85 0 0 1-.75-.38z"/>
              </svg>
              <span>TikTok</span>
            </a>
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
