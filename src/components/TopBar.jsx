"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdLanguage, MdCall, MdMail, MdDarkMode, MdLightMode } from "react-icons/md";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function TopBar() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="bg-[#f0f3f5] dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 py-2 px-4 md:px-8 text-sm hidden lg:flex items-center justify-end space-x-5 shadow-sm transition-colors">
      
      {/* Contact Info */}
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-6 h-6 rounded-full bg-[#1176b6] dark:bg-blue-600 text-white flex items-center justify-center shadow-sm">
             <MdLanguage className="text-sm" />
          </div>
          <span className="font-medium text-[#1176b6] dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">We Ship Globally</span>
        </div>
        
        <a href="tel:+919447393488" className="flex items-center space-x-2 group">
          <div className="w-6 h-6 rounded-full bg-[#1176b6] dark:bg-blue-600 text-white flex items-center justify-center shadow-sm">
             <MdCall className="text-sm" />
          </div>
          <span className="font-medium text-[#1176b6] dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">+919447393488</span>
        </a>
        
        <a href="https://wa.me/918589825825" className="flex items-center space-x-2 group">
          <div className="w-6 h-6 rounded-full bg-[#1176b6] dark:bg-blue-600 text-white flex items-center justify-center shadow-sm">
             <FaWhatsapp className="text-sm" />
          </div>
          <span className="font-medium text-[#1176b6] dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">+918589825825</span>
        </a>
        
        <a href="mailto:info@vibranthealthcare.com" className="flex items-center space-x-2 group">
          <div className="w-6 h-6 rounded-full bg-[#1176b6] dark:bg-blue-600 text-white flex items-center justify-center shadow-sm">
             <MdMail className="text-sm" />
          </div>
          <span className="font-medium text-[#1176b6] dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">info@vibranthealthcare.com</span>
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-2 pl-3">
        <a href="#" className="w-7 h-7 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity border-2 border-[#e6eaec] dark:border-slate-800 shadow-sm">
          <FaFacebookF className="w-3 h-3" />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-[#00aced] text-white flex items-center justify-center hover:opacity-80 transition-opacity border-2 border-[#e6eaec] dark:border-slate-800 shadow-sm">
          <FaTwitter className="w-3 h-3" />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-[#bb0000] text-white flex items-center justify-center hover:opacity-80 transition-opacity border-2 border-[#e6eaec] dark:border-slate-800 shadow-sm">
          <FaYoutube className="w-3 h-3" />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-[#007bb6] text-white flex items-center justify-center hover:opacity-80 transition-opacity border-2 border-[#e6eaec] dark:border-slate-800 shadow-sm">
          <FaLinkedinIn className="w-3 h-3" />
        </a>
      </div>

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="ml-3 w-8 h-8 rounded-full bg-[#1176b6] dark:bg-slate-800 text-white flex items-center justify-center hover:bg-blue-800 dark:hover:bg-slate-700 transition-colors shadow-sm"
        title="Toggle Dark Mode"
      >
        {isDarkMode ? <MdLightMode className="w-4 h-4 text-yellow-300" /> : <MdDarkMode className="w-4 h-4" />}
      </button>

      {/* Search Input */}
      <form onSubmit={handleSearch} className="ml-2 flex items-center bg-[#87b3cc] dark:bg-slate-800 rounded-full overflow-hidden shadow-inner h-8 w-44">
        <input 
          type="text" 
          placeholder="SEARCH" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-white/80 dark:placeholder-gray-400 font-bold text-xs pl-4 pr-2 w-full"
        />
        <button type="submit" className="bg-[#1176b6] dark:bg-blue-600 h-full w-10 text-white hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors flex-shrink-0 flex items-center justify-center rounded-r-full">
          <FiSearch className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
