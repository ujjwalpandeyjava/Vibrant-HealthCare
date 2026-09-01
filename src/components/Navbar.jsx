"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { MdDarkMode, MdLightMode, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import TopBar from "./TopBar";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <div className="lg:hidden border-t border-gray-100 dark:border-slate-800 mt-3 pt-4 pb-6 px-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
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
                  <Link href="/products/ultrasound-machine" className="block py-2 text-sm text-textMuted dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
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

            {/* Quick Contact & Info for Mobile */}
            <div className="pt-4 border-t border-gray-100 dark:border-slate-800 space-y-3 px-4 text-sm text-textMuted dark:text-gray-400">
              <a href="tel:+919447393488" className="flex items-center gap-2 hover:text-primary">
                <MdCall className="text-primary text-base" />
                <span>+919447393488</span>
              </a>
              <a href="https://wa.me/918589825825" className="flex items-center gap-2 hover:text-primary">
                <FaWhatsapp className="text-green-500 text-base" />
                <span>+918589825825</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
