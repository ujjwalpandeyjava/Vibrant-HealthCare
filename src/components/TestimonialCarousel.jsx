"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Vibrant Healthcare's urgent repair service saved our clinic thousands in potential downtime. Their technicians were professional, fast, and completely transparent about the parts needed.",
    author: "Dr. Sarah Jenkins",
    role: "Director of Operations, Metro Valley Clinic",
  },
  {
    quote: "The quality of the diagnostic equipment we purchased exceeded our expectations. The installation process was seamless and the ongoing support is fantastic.",
    author: "Michael Roberts",
    role: "Chief Administrator, City Health Center",
  },
  {
    quote: "We've had an annual maintenance contract with Vibrant for three years. They are always on time, extremely thorough, and their predictive maintenance has prevented several major failures.",
    author: "Dr. Emily Chen",
    role: "Lead Cardiologist, Heart & Vascular Institute",
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 md:px-8 max-w-[1248px] mx-auto w-full mt-8">
      <section 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="bg-primary text-white py-24 px-8 text-center rounded-3xl relative overflow-hidden"
      >
      <div className="max-w-4xl mx-auto flex flex-col space-y-8">
        <div className="text-6xl text-blue-300 opacity-50 font-serif leading-none">"</div>
        
        <div className="grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`[grid-area:1/1] transition-opacity duration-700 ease-in-out flex flex-col justify-between ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <p className="text-xl md:text-3xl font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-lg">{testimonial.author}</p>
                <p className="text-blue-200 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 pt-4 relative z-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white dark:bg-slate-800" : "bg-blue-400 hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}
