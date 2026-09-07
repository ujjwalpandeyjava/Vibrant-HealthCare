"use client";

import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote: "Vibrant Healthcare's urgent repair service saved our clinic thousands in potential downtime. Their technicians were professional, fast, and completely transparent about the parts needed.",
    author: "Dr. Sarah Jenkins",
    role: "Director of Operations, Metro Valley Clinic",
    location: "Kochi, Kerala",
  },
  {
    quote: "The quality of the diagnostic equipment we purchased exceeded our expectations. The installation process was seamless and the ongoing technical support has been exceptional.",
    author: "Michael Roberts",
    role: "Chief Administrator, City Health Center",
    location: "Calicut, Kerala",
  },
  {
    quote: "We've had an annual maintenance contract with Vibrant for three years. They are always on time, extremely thorough, and their predictive maintenance has prevented several major imaging failures.",
    author: "Dr. Emily Chen",
    role: "Lead Cardiologist, Heart & Vascular Institute",
    location: "Bangalore, Karnataka",
  },
  {
    quote: "Sourcing certified ultrasound transducers and OEM probes from Vibrant Healthcare drastically improved our image resolution and diagnostic precision. Truly dependable partners.",
    author: "Dr. Rajesh Nambiar",
    role: "Senior Radiologist, Malabar Scans & Diagnostics",
    location: "Thrissur, Kerala",
  },
  {
    quote: "Their 24/7 dispatch network delivered urgent ultrasound replacement components to our facility in under 12 hours. Outstanding service commitment and technical expertise.",
    author: "Dr. Anita Deshmukh",
    role: "Head of Biomedical Engineering, Apex Specialty Hospital",
    location: "Mumbai, Maharashtra",
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full my-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <span>Client Testimonials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Trusted by Healthcare Leaders
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
          Hear directly from medical directors, clinicians, and hospital administrators who depend on our diagnostic equipment and support.
        </p>
      </div>

      {/* Main Carousel Card Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#075985] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden"
      >
        {/* Decorative background quote mark */}
        <div className="absolute top-6 right-8 text-white/10 select-none pointer-events-none">
          <FaQuoteLeft className="w-32 h-32 lg:w-48 lg:h-48" />
        </div>

        {/* Previous Button (Desktop & Mobile) */}
        <button
          onClick={prevSlide}
          aria-label="Previous Testimonial"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95 group"
        >
          <FiChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button (Desktop & Mobile) */}
        <button
          onClick={nextSlide}
          aria-label="Next Testimonial"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95 group"
        >
          <FiChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Carousel Content Track */}
        <div className="relative max-w-3xl mx-auto min-h-[260px] sm:min-h-[220px] flex items-center justify-center px-6 sm:px-12">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out ${
                  isActive
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto z-10"
                    : index < currentIndex
                    ? "opacity-0 scale-95 -translate-x-12 pointer-events-none z-0"
                    : "opacity-0 scale-95 translate-x-12 pointer-events-none z-0"
                }`}
              >
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 mb-4 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 drop-shadow-xs italic text-white/95 max-w-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="space-y-0.5">
                  <h4 className="font-black text-base sm:text-lg text-white tracking-wide">
                    {testimonial.author}
                  </h4>
                  <p className="text-blue-100 text-xs sm:text-sm font-medium">
                    {testimonial.role} &bull; <span className="opacity-80">{testimonial.location}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Controls */}
        <div className="mt-8 flex items-center justify-center space-x-3 relative z-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8 shadow-sm"
                  : "bg-white/40 hover:bg-white/70 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
