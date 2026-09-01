"use client";

import { useState } from "react";

export default function ContactForm({ defaultSubject = "General Inquiry" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: defaultSubject,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          pageCategory: formData.subject, // Map subject to category
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: defaultSubject,
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Failed to submit inquiry");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 md:p-10 rounded-3xl text-center py-16 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-on-surface dark:text-white mb-2">Message Sent!</h2>
        <p className="text-on-surface-variant dark:text-gray-400">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 md:p-10 rounded-3xl">
      <h2 className="text-2xl font-bold text-on-surface dark:text-white mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-semibold text-on-surface dark:text-gray-200">First Name</label>
            <input 
              type="text" 
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white dark:placeholder-gray-500"
              placeholder="Jane"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-semibold text-on-surface dark:text-gray-200">Last Name</label>
            <input 
              type="text" 
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white dark:placeholder-gray-500"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-on-surface dark:text-gray-200">Email Address</label>
          <input 
            type="email" 
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white dark:placeholder-gray-500"
            placeholder="jane@clinic.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-semibold text-on-surface dark:text-gray-200">Subject</label>
          <select 
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Request Quote">Request Quote</option>
            <option value="Urgent Repair">Urgent Repair</option>
            <option value="Maintenance Plan">Maintenance Plan</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-on-surface dark:text-gray-200">Message</label>
          <textarea 
            id="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm resize-none dark:text-white dark:placeholder-gray-500"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
