import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OFFICIAL_MENU_PICS } from '../data/foodData';
import { FileText, Maximize2, X, Download, ZoomIn, ZoomOut, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

export const MenuCardsViewer: React.FC = () => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentCard = OFFICIAL_MENU_PICS[selectedPageIndex];

  const handleOpenLightbox = (index: number) => {
    setSelectedPageIndex(index);
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  return (
    <section id="menu-cards" className="py-16 relative bg-gradient-to-b from-black via-gray-950 to-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4E00]/15 border border-[#FF4E00]/30 text-[#FF4E00] text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4 text-orange-500" />
            <span>Authentic Restaurant Menu Cards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E00] via-[#F27D26] to-amber-400">Mr. Fries Menu Cards</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Click on any menu page below to zoom in and view our full physical menu card.
          </p>
        </div>

        {/* Page Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {OFFICIAL_MENU_PICS.map((page, idx) => (
            <button
              key={page.id}
              onClick={() => setSelectedPageIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer border ${
                selectedPageIndex === idx
                  ? 'bg-gradient-to-r from-[#FF4E00] to-[#F27D26] text-white border-red-500 shadow-lg shadow-[#FF4E00]/30 scale-105'
                  : 'bg-gray-900/80 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Page {idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Main Menu Card Showcase Frame */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-900 to-black p-4 sm:p-6 rounded-3xl border border-red-500/30 shadow-[0_20px_50px_rgba(255,78,0,0.15)] relative group">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center min-h-[380px] sm:min-h-[500px]">
            <img
              src={currentCard.imageUrl}
              alt={currentCard.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[700px] object-contain rounded-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-500"
              onClick={() => handleOpenLightbox(selectedPageIndex)}
            />

            {/* Click to Expand Overlay */}
            <button
              onClick={() => handleOpenLightbox(selectedPageIndex)}
              className="absolute top-4 right-4 bg-black/80 hover:bg-[#FF4E00] text-white p-3 rounded-2xl border border-white/20 backdrop-blur-md transition-all shadow-xl flex items-center gap-2 text-xs font-bold cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Zoom Fullscreen</span>
            </button>

            <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center justify-between text-xs text-white">
              <div>
                <h4 className="font-extrabold text-white text-sm sm:text-base">{currentCard.title}</h4>
                <p className="text-gray-400 text-xs">{currentCard.subtitle}</p>
              </div>

              <a
                href={currentCard.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Open Image</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Thumbnails Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
          {OFFICIAL_MENU_PICS.map((page, idx) => (
            <div
              key={page.id}
              onClick={() => setSelectedPageIndex(idx)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                selectedPageIndex === idx
                  ? 'bg-red-950/60 border-[#FF4E00] ring-2 ring-[#FF4E00]/50 shadow-lg'
                  : 'bg-gray-900/60 border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
              }`}
            >
              <img
                src={page.imageUrl}
                alt={page.title}
                referrerPolicy="no-referrer"
                className="w-16 h-16 object-cover rounded-xl border border-white/10"
              />
              <div className="overflow-hidden">
                <span className="text-xs font-black text-white block truncate">Page {idx + 1}</span>
                <span className="text-[10px] text-gray-400 block truncate">{page.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Lightbox Controls */}
            <div className="flex items-center justify-between text-white z-10 bg-black/60 p-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="font-bold text-sm sm:text-base">{currentCard.title}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.25))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-amber-400 font-bold">{Math.round(zoomLevel * 100)}%</span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                <a
                  href={currentCard.imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  title="Open Full Image"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>

                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Central Zoomable Menu Card */}
            <div className="flex-1 flex items-center justify-center overflow-auto py-4">
              <motion.img
                src={currentCard.imageUrl}
                alt={currentCard.title}
                referrerPolicy="no-referrer"
                animate={{ scale: zoomLevel }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Lightbox Controls */}
            <div className="flex items-center justify-center gap-4 z-10 py-2">
              {OFFICIAL_MENU_PICS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPageIndex(idx);
                    setZoomLevel(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    selectedPageIndex === idx
                      ? 'bg-[#FF4E00] text-white border-red-400 shadow-lg'
                      : 'bg-white/10 text-gray-300 border-white/20'
                  }`}
                >
                  Page {idx + 1}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
