import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full py-6 px-4 md:px-8">
      <div className="lg:w-1/2 space-y-6">
        <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
          <MdCheckCircle className="h-4 w-4" />
          <span>Fast, reliable medical support</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-on-surface dark:text-white">
          Keeping Your Clinic <span className="text-primary">Moving</span>
        </h1>
        <p className="text-textMuted dark:text-gray-400 text-lg leading-relaxed max-w-lg">
          We provide top-tier medical equipment, rapid repair services, and preventive maintenance to ensure your healthcare facility never misses a beat.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/search"
            className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <span>View Inventory</span>
            <FiArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="/professional-service"
            className="bg-white dark:bg-slate-800 text-on-surface dark:text-white border border-gray-300 dark:border-slate-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 relative w-full max-w-lg lg:max-w-none mx-auto mt-6 sm:mt-8 lg:mt-0">
        <div className="relative mr-5 sm:mr-8 lg:mr-10 mt-5 sm:mt-8 lg:mt-10">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-xl relative z-10 aspect-[4/3] overflow-hidden">
            <Image
              alt="Medical Scene"
              className="rounded-2xl object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -top-5 -right-5 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-full h-full bg-blue-50 dark:bg-blue-900/30 rounded-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
