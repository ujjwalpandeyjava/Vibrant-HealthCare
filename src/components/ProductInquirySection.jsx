"use client";

import { useState } from "react";
import { FiSend, FiCheckCircle, FiHelpCircle } from "react-icons/fi";

export default function ProductInquirySection({ categoryName = "Products" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageCategory: categoryName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setStatusMessage(data.message || "Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setIsSuccess(false);
        setStatusMessage(data.error || "Failed to send your message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setIsSuccess(false);
      setStatusMessage("An error occurred while sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 mb-12">
      <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-800/40 relative overflow-hidden">
        
        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              <FiHelpCircle className="w-4 h-4 text-blue-400" />
              <span>Can&apos;t Find What You Need?</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Didn&apos;t find the product you were looking for?
            </h2>
            <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto">
              Drop us a message with your specific requirements. Our medical equipment specialists will source it for you immediately.
            </p>
          </div>

          {/* Form / Status */}
          {isSuccess ? (
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-300">
              <FiCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Request Sent Successfully!</h3>
              <p className="text-blue-100 text-base mb-6 max-w-md mx-auto">
                {statusMessage}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="bg-white text-slate-900 font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-slate-400 text-sm outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-slate-400 text-sm outline-none transition-all"
                  />
                </div>

                {/* Phone Number (Optional) */}
                <div>
                  <label htmlFor="inquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                    Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    maxLength="12"
                    onInput={(e) => { e.target.value = e.target.value.replace(/[^\d\+\-\s\(\)]/g, '') }}
                    pattern="[\d\+\-\s]+"
                    title="Phone number can only contain digits, spaces, plus, and minus signs."
                    id="inquiry-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-slate-400 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                  Your Message / Required Equipment <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={`Describe the ${categoryName.toLowerCase()} or equipment model you are searching for...`}
                  className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-slate-400 text-sm outline-none transition-all resize-none"
                />
              </div>

              {/* Status Banner Error */}
              {statusMessage && !isSuccess && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm text-center">
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[220px] bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
