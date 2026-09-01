"use client";

import { useState } from "react";
import { MdUploadFile, MdCheckCircle } from "react-icons/md";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
export default function SellMachinePage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const file = e.target.elements.image?.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      alert("Please upload an image smaller than 10MB.");
      return;
    }

    setLoading(true);
    const formData = new FormData(e.target);
    
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        e.target.reset();
        setFileName("");
      } else {
        alert("Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-slate-900 animate-in fade-in duration-300">
      <ProfessionalServiceBanner bannerText="SELL YOUR MACHINE" />
      <div className="w-full max-w-3xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center space-y-4 mb-12">
          <p className="text-lg text-textMuted dark:text-gray-400 max-w-xl mx-auto">
            Looking to upgrade or clear out old inventory? Connect with our team by providing some basic details about your equipment.
          </p>
        </div>

        <div className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 md:p-10 rounded-3xl">
        {success ? (
          <div className="text-center py-12 space-y-4">
            <MdCheckCircle className="text-green-500 text-6xl mx-auto" />
            <h2 className="text-2xl font-bold text-on-surface dark:text-white">Request Sent!</h2>
            <p className="text-textMuted dark:text-gray-400">Thank you. Our team will review the details and get back to you shortly.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="mt-6 bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="heading" className="text-sm font-semibold text-on-surface dark:text-white">Machine Name / Model</label>
              <input 
                type="text" 
                id="heading"
                name="heading"
                required
                className="w-full bg-surface dark:bg-slate-800 dark:text-white border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm"
                placeholder="e.g. GE Logiq E10"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-on-surface dark:text-white">Contact Number</label>
                <input 
                  type="tel" 
                  maxLength="12"
                  onInput={(e) => { e.target.value = e.target.value.replace(/[^\d\+\-\s\(\)]/g, '') }}
                  pattern="[\d\+\-\s]+"
                  title="Phone number can only contain digits, spaces, plus, and minus signs."
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-surface dark:bg-slate-800 dark:text-white border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-on-surface dark:text-white">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-surface dark:bg-slate-800 dark:text-white border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm"
                  placeholder="contact@clinic.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-semibold text-on-surface dark:text-white">Description / Details</label>
              <textarea 
                id="description"
                name="description"
                required
                rows="4"
                className="w-full bg-surface dark:bg-slate-800 dark:text-white border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm resize-none"
                placeholder="Year of manufacture, condition, any known issues..."
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface dark:text-white">Machine Images</label>
              <div className="border-2 border-dashed border-outline-variant dark:border-slate-600 rounded-xl p-8 text-center hover:bg-surface-container-low dark:hover:bg-slate-700 transition-colors cursor-pointer relative">
                <input 
                  type="file" 
                  name="image" 
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                />
                <MdUploadFile className="mx-auto text-4xl text-outline mb-2" />
                <p className="text-sm font-medium text-on-surface dark:text-white">
                  {fileName ? fileName : "Click or drag to upload an image"}
                </p>
                {!fileName && <p className="text-xs text-textMuted dark:text-gray-400 mt-1">PNG, JPG up to 10MB</p>}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit Details"}
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
  );
}
