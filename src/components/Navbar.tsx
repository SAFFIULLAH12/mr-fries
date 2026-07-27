import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, Volume2, VolumeX, Menu as MenuIcon, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenTracker?: () => void;
  hasActiveOrder?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenTracker,
  hasActiveOrder = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSoundMuted, setIsSoundMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu Cards', href: '#menu-cards' },
    { name: 'Online Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#locations' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#FF4E00]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF4E00] to-[#F27D26] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,78,0,0.4)] group-hover:scale-105 transition-transform font-black text-black text-xl">
            🍟
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            MR. <span className="text-[#FF4E00]">FRIES</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#FF4E00] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4E00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Active Order Tracker Button */}
          {hasActiveOrder && onOpenTracker && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={onOpenTracker}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold animate-pulse hover:bg-amber-500/30 cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Track Order</span>
            </motion.button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={() => setIsSoundMuted(!isSoundMuted)}
            title={isSoundMuted ? 'Unmute Ambient Grill Sound' : 'Mute Grill Sound'}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isSoundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FF4E00] animate-pulse" />}
          </button>

          {/* Cart Button with Counter */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#FF4E00]/20 border border-[#FF4E00]/40 text-white shadow-lg hover:bg-[#FF4E00]/30 transition-all flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-[#FF4E00]" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FF4E00] text-black font-black text-[10px] flex items-center justify-center border-2 border-[#050505] shadow-md"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Order Now Button */}
          <a
            href="#menu"
            className="hidden sm:block px-6 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-[#FF4E00] hover:text-white transition-all shadow-xl cursor-pointer"
          >
            ORDER NOW
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-[#FF4E00]/20 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold text-gray-300 hover:text-[#FF4E00] py-2 uppercase tracking-wider flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#FF4E00]">→</span>
                </a>
              ))}

              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-[#FF4E00] to-[#F27D26] text-white font-bold text-center text-xs tracking-wider uppercase shadow-lg shadow-[#FF4E00]/30"
              >
                Order Online Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

