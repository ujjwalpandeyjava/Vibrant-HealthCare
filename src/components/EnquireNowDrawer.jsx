"use client";

import { useState, useEffect, useRef } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";

export default function EnquireNowDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [side, setSide] = useState("right"); // "right" | "left"
  const [topPos, setTopPos] = useState(null); // in px
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const containerRef = useRef(null);
  const dragStartRef = useRef({ startX: 0, startY: 0, initialTop: 0, hasMoved: false });

  // Initialize vertical position to middle on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTopPos(Math.max(80, window.innerHeight / 2 - 120));
    }
  }, []);

  // Handle outside click to close drawer
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Dragging logic
  const startDrag = (clientX, clientY) => {
    dragStartRef.current = {
      startX: clientX,
      startY: clientY,
      initialTop: topPos ?? (window.innerHeight / 2 - 120),
      hasMoved: false,
    };
    setIsDragging(true);
  };

  const onDrag = (clientX, clientY) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartRef.current.startX;
    const deltaY = clientY - dragStartRef.current.startY;

    if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
      dragStartRef.current.hasMoved = true;
    }

    const newTop = Math.max(60, Math.min(window.innerHeight - 380, dragStartRef.current.initialTop + deltaY));
    setTopPos(newTop);
  };

  const endDrag = (clientX) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragStartRef.current.hasMoved) {
      // Snap to nearest screen edge (left or right)
      const screenMid = window.innerWidth / 2;
      const newSide = clientX < screenMid ? "left" : "right";
      setSide(newSide);
    } else {
      // Pure click: toggle flyout
      setIsOpen((prev) => !prev);
    }
  };

  // Mouse handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    startDrag(e.clientX, e.clientY);
  };

  useEffect(() => {
    const handleMouseMove = (e) => onDrag(e.clientX, e.clientY);
    const handleMouseUp = (e) => endDrag(e.clientX);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    onDrag(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    endDrag(touch.clientX);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageCategory: "Floating Quick Enquiry",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
        }, 3000);
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLeft = side === "left";

  return (
    <div
      ref={containerRef}
      style={{ top: topPos !== null ? `${topPos}px` : "40%" }}
      className={`fixed ${isLeft ? "left-0" : "right-0"} z-50 transition-all ${
        isDragging ? "duration-0 select-none" : "duration-300 ease-out"
      } ${
        isLeft
          ? isOpen
            ? "translate-x-0"
            : "-translate-x-full"
          : isOpen
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >
      {/* Floating Vertical Green Draggable Tab (anchored to outer edge of drawer) */}
      <button
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Drag or toggle quick enquiry form"
        title="Drag vertically or drop on either screen edge"
        className={`absolute top-6 ${
          isLeft ? "left-full rounded-r-xl" : "right-full rounded-l-xl"
        } bg-[#008000] hover:bg-[#006e00] active:bg-[#005500] text-white font-bold text-sm tracking-wider py-5 px-2.5 shadow-2xl flex items-center justify-center transition-colors focus:outline-none select-none ${
          isDragging ? "cursor-grabbing shadow-emerald-950/60 scale-105" : "cursor-grab"
        }`}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        <span className="pointer-events-none">
          Enquire Now
        </span>
      </button>

      {/* Flyout Enquiry Form Card */}
      <div
        className={`w-[300px] sm:w-[340px] bg-white dark:bg-slate-800 p-5 shadow-2xl border border-gray-200 dark:border-slate-700 text-on-surface dark:text-white ${
          isLeft ? "rounded-r-2xl border-l-0" : "rounded-l-2xl border-r-0"
        }`}
      >
        <div className="flex items-center justify-between mb-3 border-b border-gray-100 dark:border-slate-700 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Quick Enquiry</h3>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">
              {isLeft ? "Left Edge" : "Right Edge"}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close form"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-md transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-6 text-center space-y-2">
            <FiCheckCircle className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
            <p className="font-bold text-slate-800 dark:text-white text-sm">Thank you!</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your inquiry has been received. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <textarea
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-red-500 font-medium">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0077b6] hover:bg-[#005f94] text-white font-bold text-xs tracking-wider py-2.5 px-4 rounded-md uppercase transition-all shadow-md active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <span>{isSubmitting ? "Submitting..." : "SUBMIT"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
