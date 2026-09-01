"use client";

import { useState } from "react";

export default function DeviceGallery({ images, manufacturer, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 aspect-[4/3] flex items-center justify-center border border-outline-variant/30 dark:border-slate-700/30">
        <div 
          title="Manufacturer"
          className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-sm flex items-center gap-2 shadow-sm z-10 text-on-surface dark:text-white cursor-help"
        >
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          {manufacturer}
        </div>
        <img 
          alt={`${name} main view`} 
          className="object-contain w-full h-full p-2 transition-opacity duration-300 rounded-xl" 
          src={images[currentIndex]} 
        />
      </div>
      
      {/* Thumbnail Row */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-white dark:bg-slate-800 ${
                currentIndex === idx 
                  ? "border-primary shadow-md scale-100 opacity-100" 
                  : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100 scale-95 hover:scale-100"
              }`}
            >
              <img 
                alt={`Thumbnail ${idx + 1}`} 
                className="w-full h-full object-cover p-1" 
                src={img} 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
