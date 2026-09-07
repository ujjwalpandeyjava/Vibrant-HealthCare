"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    tag: "Ultrasound Excellence",
    title: "25 Years of Trust in\nUltrasound System Sales & Service",
    description:
      "Vibrant Healthcare is founded with a mission to deliver best-in-class competitively priced ultrasound devices and complete lifecycle clinical support.",
    buttonText: "Read More",
    buttonLink: "/products/machine",
    image: "/images/banners/ultrasound-machine.jpg",
    alt: "Ultrasound System",
  },
  {
    id: 2,
    tag: "Advanced Imaging",
    title: "High-Field MRI & Multi-Slice CT Scanner Solutions",
    description:
      "Precision diagnostic radiology equipment engineered to expand clinical capacity, fully calibrated with OEM-certified components and warranties.",
    buttonText: "Explore Scanners",
    buttonLink: "/search",
    image: "/images/banners/mri-scanner.jpg",
    alt: "MRI Scanner Diagnostic System",
  },
  {
    id: 3,
    tag: "Biomedical Support",
    title: "24/7 Expert Biomedical Equipment Repair & Maintenance",
    description:
      "Dedicated field engineers providing immediate on-site fault resolution, scheduled preventive maintenance, and guaranteed genuine replacement parts.",
    buttonText: "Our Services",
    buttonLink: "/professional-service",
    image: "/images/banners/x-ray-machine.jpg",
    alt: "Medical Maintenance & Diagnostics",
  },
];

export default function HomeHeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const diff = touchStartX - touchEndX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <div className="w-full max-w-7xl mt-10 mx-auto px-4 md:px-8">
      <div
        className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#075985] text-white select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle geometric polygon facet backdrop */}
        <svg
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="polyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="polyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 650,0 480,600 0,600" fill="url(#polyGrad1)" />
          <polygon points="480,600 650,0 920,240 760,600" fill="url(#polyGrad2)" />
          <polygon points="650,0 1200,0 1200,320 920,240" fill="url(#polyGrad1)" />
          <polygon points="920,240 1200,320 1200,600 760,600" fill="url(#polyGrad2)" />
          <polygon points="350,180 720,120 540,460" fill="rgba(255,255,255,0.06)" />
        </svg>

        {/* Slides Track */}
        <div className="relative min-h-[640px] sm:min-h-[660px] lg:min-h-[460px] flex items-center">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 pt-8 pb-16 sm:py-10 transition-all duration-700 ease-in-out ${isActive
                  ? "opacity-100 translate-x-0 pointer-events-auto z-10"
                  : idx < current
                    ? "opacity-0 -translate-x-8 pointer-events-none z-0"
                    : "opacity-0 translate-x-8 pointer-events-none z-0"
                  }`}
              >
                {/* Left Content Column */}
                <div className="w-full lg:w-3/5 z-20 space-y-3.5 sm:space-y-4 text-left flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-blue-100 px-3.5 py-1 rounded-full text-xs font-semibold w-fit tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{slide.tag}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight whitespace-pre-line drop-shadow-sm">
                    {slide.title}
                  </h2>

                  <p className="text-blue-100/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  <div className="pt-1 sm:pt-2">
                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center space-x-2 bg-[#b02a5b] hover:bg-[#971b49] text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/40 shadow-lg shadow-[#b02a5b]/40 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>{slide.buttonText}</span>
                      <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Image Graphic Column */}
                <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end relative mt-6 sm:mt-8 lg:mt-0 z-10">
                  {/* Clean cutout container - mix-blend-multiply eliminates the white image background completely */}
                  <div className="relative z-10 w-full max-w-[210px] sm:max-w-[270px] lg:max-w-[340px] h-[190px] sm:h-[230px] lg:h-[310px] flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="max-w-full max-h-full object-contain mix-blend-multiply select-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Carousel Arrow Navigation */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/25 hover:bg-black/45 text-white/90 hover:text-white backdrop-blur-md transition-colors border border-white/10 hidden lg:flex items-center justify-center"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/25 hover:bg-black/45 text-white/90 hover:text-white backdrop-blur-md transition-colors border border-white/10 hidden lg:flex items-center justify-center"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Control Dock: Indicator Dots & Mobile Nav Buttons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          {/* Mobile Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors flex lg:hidden items-center justify-center"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${idx === current
                  ? "bg-[#e11d48] w-3 h-3 scale-110 shadow-sm"
                  : "bg-slate-900/80 hover:bg-slate-800 w-3 h-3"
                  }`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors flex lg:hidden items-center justify-center"
          >
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
