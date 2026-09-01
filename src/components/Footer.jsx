import Link from "next/link";
import { MdLocalHospital, MdLocationOn, MdCall, MdMail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-gray-900 border-t border-outline-variant dark:border-gray-800 text-on-surface dark:text-gray-300 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Top Section: Logo and Newsletter */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-outline-variant dark:border-gray-800">
          <div className="flex items-center space-x-2 text-primary dark:text-blue-400 font-bold text-2xl">
            <MdLocalHospital className="h-8 w-8" />
            <span>Vibrant Healthcare</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto hidden">
            <span className="font-semibold text-lg text-on-surface dark:text-gray-100 whitespace-nowrap">Subscribe our newsletter</span>
            <form className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your mail id"
                className="px-4 py-2 w-full sm:w-64 border border-outline-variant dark:border-gray-700 rounded-l-md focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-2 rounded-r-md font-semibold hover:bg-red-700 transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links and Address */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Sitemap */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-on-surface dark:text-gray-100">Sitemap</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <Link href="/" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <Link href="/search" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Products</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">News and Events</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Blog</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-on-surface dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <Link href="/about-us" className="hover:text-primary dark:hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <Link href="/professional-service" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Professional Service</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Customer Reviews</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <Link href="/contact" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 (Continuation) */}
          <div className="lg:pt-11">
            <ul className="space-y-3 text-sm text-on-surface-variant dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <Link href="/search" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Products</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Why Choose Us</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Quality Policy</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Info</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-secondary text-xs">•</span>
                <Link href="/sell-machine" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Sell Your Machine</Link>
              </li>
            </ul>
          </div>

          {/* Address & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-on-surface dark:text-gray-100">Address</h4>
            <div className="space-y-4 text-sm text-on-surface-variant dark:text-gray-400">
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-secondary text-lg mt-0.5 flex-shrink-0" />
                <p>100 Vibrant Way, Innovation Park<br />Seattle, WA 98101</p>
              </div>
              <div className="flex items-center gap-3">
                <MdCall className="text-secondary text-lg flex-shrink-0" />
                <p>+1 800-VIBRANT</p>
              </div>
              <div className="flex items-center gap-3">
                <MdMail className="text-secondary text-lg flex-shrink-0" />
                <p>info@vibranthealthcare.com</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-2 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#00aced] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#dd4b39] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <FaGooglePlusG className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#007bb6] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-surface-container-low dark:bg-gray-950 py-4 border-t border-outline-variant dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-on-surface-variant dark:text-gray-500">
          <p>© 2024 Vibrant Healthcare. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Website Design & SEO by <a href="https://ujjwal-pandey.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Ujjwal Pandey</a></p>
        </div>
      </div>
    </footer>
  );
}
