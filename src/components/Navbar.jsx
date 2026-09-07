"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdDarkMode, MdLightMode, MdCall, MdMail, MdLanguage } from "react-icons/md";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import TopBar from "./TopBar";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else if (savedTheme === "light") {
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
      setIsMobileMenuOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <TopBar />
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-3.5 px-4 md:px-8 sticky top-0 z-50 transition-colors shadow-sm dark:shadow-slate-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="text-primary font-bold text-xl md:text-2xl tracking-tight flex items-center gap-2">
            <span>Vibrant Healthcare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className={`font-medium text-sm transition-colors ${pathname === "/" ? "text-primary dark:text-blue-400 font-semibold" : "text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`font-medium text-sm transition-colors ${pathname === "/about-us" ? "text-primary dark:text-blue-400 font-semibold" : "text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <Link
                href="/products"
                className={`flex items-center space-x-1 font-medium text-sm py-2 transition-colors ${pathname.startsWith("/search") || pathname.startsWith("/products") ? "text-primary dark:text-blue-400 font-semibold" : "text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                  }`}
              >
                <span>Products</span>
                <FiChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-0 w-52 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="p-2 flex flex-col gap-1">
                  <Link href="/products/machine" className="block px-4 py-2 text-sm text-textMuted dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors">
                    Machines
                  </Link>
                  <Link href="/products/transducer" className="block px-4 py-2 text-sm text-textMuted dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors">
                    Transducer
                  </Link>
                  <Link href="/products/spares" className="block px-4 py-2 text-sm text-textMuted dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors">
                    Spares
                  </Link>
                  <Link href="/products/accessories" className="block px-4 py-2 text-sm text-textMuted dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors">
                    Accessories
                  </Link>
                </div>
              </div>
            </div>

            {/* Professional Service Dropdown */}
            <div className="relative group">
              <Link
                href="/professional-service"
                className={`flex items-center space-x-1 font-medium text-sm py-2 transition-colors ${pathname.startsWith("/professional-service") ? "text-primary dark:text-blue-400 font-semibold" : "text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                  }`}
              >
                <span>Professional Service</span>
                <FiChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="p-2 flex flex-col gap-1">
                  <Link href="/professional-service/repairs" className="block px-4 py-2 text-sm text-textMuted dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors">Repairs</Link>
                  <Link href="/professional-service/maintenance" className="block px-4 py-2 text-sm text-textMuted dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors">Maintenance</Link>
                  <Link href="/professional-service/dispatch" className="block px-4 py-2 text-sm text-textMuted dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors">Dispatch</Link>
                </div>
              </div>
            </div>

            <Link
              href="/sell-machine"
              className={`font-medium text-sm transition-colors ${pathname === "/sell-machine" ? "text-primary dark:text-blue-400 font-semibold" : "text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                }`}
            >
              Sell Your Machine
            </Link>

            <Link
              href="/contact"
              className={`font-medium text-sm transition-colors ${pathname === "/contact" ? "text-primary dark:text-blue-400 font-semibold" : "text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Icons (Theme toggle + Mobile Menu Hamburger) */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <MdLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 dark:border-slate-800 mt-3 pt-4 pb-6 px-3 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center bg-gray-100 dark:bg-slate-800/90 rounded-xl overflow-hidden p-1 border border-gray-200 dark:border-slate-700 shadow-xs">
              <input
                type="text"
                placeholder="Search products & equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-slate-800 dark:text-white placeholder-gray-400 px-3 py-1.5 w-full font-medium"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex-shrink-0 flex items-center justify-center"
                aria-label="Submit Search"
              >
                <FiSearch className="w-4 h-4" />
              </button>
            </form>

            {/* Global Shipping Notice Banner */}
            <div className="flex items-center gap-2.5 px-3 py-2 bg-blue-50/80 dark:bg-blue-900/30 rounded-xl border border-blue-200/60 dark:border-blue-800/60 text-[#1176b6] dark:text-blue-300 font-semibold text-xs sm:text-sm">
              <div className="w-6 h-6 rounded-full bg-[#1176b6] dark:bg-blue-600 text-white flex items-center justify-center shrink-0">
                <MdLanguage className="text-sm" />
              </div>
              <span>We Ship Globally</span>
            </div>

            {/* Main Navigation Links */}
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-on-surface dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-on-surface dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                About Us
              </Link>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium text-on-surface dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
                >
                  <span>Products</span>
                  <FiChevronDown className={`w-5 h-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
                {productsOpen && (
                  <div className="pl-6 pr-4 py-2 space-y-1 bg-gray-50/50 dark:bg-slate-800/50 rounded-lg mt-1">
                    <Link href="/products/machine" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
                      Machines
                    </Link>
                    <Link href="/products/transducer" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
                      Transducer
                    </Link>
                    <Link href="/products/spares" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
                      Spares
                    </Link>
                    <Link href="/products/accessories" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
                      Accessories
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Professional Service Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium text-on-surface dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
                >
                  <span>Professional Service</span>
                  <FiChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-6 pr-4 py-2 space-y-1 bg-gray-50/50 dark:bg-slate-800/50 rounded-lg mt-1">
                    <Link href="/professional-service/repairs" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
                      Repairs
                    </Link>
                    <Link href="/professional-service/maintenance" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
                      Maintenance
                    </Link>
                    <Link href="/professional-service/dispatch" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
                      Dispatch
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/sell-machine"
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-on-surface dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                Sell Your Machine
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-on-surface dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-3 border-t border-gray-100 dark:border-slate-800 space-y-2 px-2">
              <a href="tel:+919447393488" className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-slate-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#1176b6] dark:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MdCall className="text-sm" />
                </div>
                <span>+919447393488</span>
              </a>

              <a href="https://wa.me/918589825825" className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-slate-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FaWhatsapp className="text-sm" />
                </div>
                <span>+918589825825</span>
              </a>

              <a href="mailto:info@vibranthealthcare.com" className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-slate-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#1176b6] dark:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MdMail className="text-sm" />
                </div>
                <span className="truncate">info@vibranthealthcare.com</span>
              </a>
            </div>

            {/* Theme Switcher & Social Media Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-slate-800 px-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-gray-300 px-3 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors shadow-xs"
              >
                {isDarkMode ? (
                  <>
                    <MdLightMode className="w-4 h-4 text-yellow-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <MdDarkMode className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <div className="flex items-center space-x-2">
                <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity shadow-xs">
                  <FaFacebookF className="w-3 h-3" />
                </a>
                <a href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-[#00aced] text-white flex items-center justify-center hover:opacity-80 transition-opacity shadow-xs">
                  <FaTwitter className="w-3 h-3" />
                </a>
                <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-[#bb0000] text-white flex items-center justify-center hover:opacity-80 transition-opacity shadow-xs">
                  <FaYoutube className="w-3 h-3" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-[#007bb6] text-white flex items-center justify-center hover:opacity-80 transition-opacity shadow-xs">
                  <FaLinkedinIn className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
