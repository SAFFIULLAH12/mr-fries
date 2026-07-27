import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/foodData';
import { GalleryItem } from '../types';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 relative bg-gradient-to-b from-black via-gray-950 to-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-4 h-4 text-orange-500" />
            <span>Visual Culinary Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Photo Gallery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            High-definition macro food photography captured live inside our flame-kitchen line.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className="group relative h-72 rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/50 cursor-pointer shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-md mb-2 inline-block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-300 font-light line-clamp-1">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-gray-950 rounded-3xl overflow-hidden border border-red-500/30 p-4"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[70vh] object-cover rounded-2xl"
              />

              <div className="p-4 sm:p-6 text-white">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-black mt-2 mb-1">{selectedItem.title}</h3>
                <p className="text-sm text-gray-300 font-light">{selectedItem.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
