"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiEye, FiFlag, FiShield } from "react-icons/fi";

const services = [
  {
    title: "Accessories",
    link: "/products/accessories",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOBDf5Z1GGLUeJviCgCjGZr-2oePbd75O9twv8nK3hwB8Uh4KaZ0VGuqMY6etZrXUapO-b1wD-xttjIIEfchSB9XU2qX6njszhNKOngAmtOJxIeCEcy62LcVjogwt6MtNW5LGMl1Zql4XxwYiDP__mv5Q3ssVqG9dJB2_sIyer1Z6zZAgTelNgLLRoYwLBBrawpgrUxjsI5daBybBuv2fktWp_zy8orZCMzWh8oaxsHKgaNpugF0aCWw",
    alt: "Medical Accessories",
  },
  {
    title: "Ultrasound Machine",
    link: "/products/machine",
    image: "/images/banners/ultrasound-machine.jpg",
    alt: "Ultrasound Systems",
  },
  {
    title: "Professional Service",
    link: "/professional-service",
    image: "/images/doctors_performing_operation.jpg",
    alt: "Biomedical Equipment Service",
  },
  {
    title: "Spares",
    link: "/products/spares",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI2L2RbbbmqKfxbkHwPNVaCkNHgky_8NSFrfBouY6xhI-H3KPYBPRKTHeU9-WUPhr_PieBIZuEew227oopmgQ84v_3KRcxfzNhW1PIZVLacu06WmLtvGUTaGNj4_u-oVcwngxbJ0eXeOH0kDDOvS01BTVbmZTSOSAaCE5MbpSDVeUq_SiDz4QY2TQdRKvxHliREeolHLla2vEne7EL2O6kAkQSyQvWm8Nd9B2fx43cQh5-u_7xtxk_6Q",
    alt: "OEM Spare Components",
  },
  {
    title: "Transducer",
    link: "/products/transducer",
    image: "/images/banners/ultrasound-transducer.jpg",
    alt: "Ultrasound Probes & Transducers",
  },
];

export default function ClassicOverviewServices() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 space-y-16">
      {/* Top Section: Welcome + PNDT Compliance + Vision/Mission */}
      <section className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Text, CTA & PNDT Banner */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Welcome to Vibrant Healthcare
            </h2>

            <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              One of our key assets is the comprehensive expertise of our technical and management team. With a combined experience of over 25 years in the ultrasound and diagnostic imaging industry, you are dealing with experts who deliver cost-effective, certified, and reliable solutions for any and every medical equipment requirement.
            </p>

            <div>
              <Link
                href="/about-us"
                className="inline-flex items-center space-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm sm:text-base px-6 py-2.5 rounded-full transition-colors"
              >
                <span>Read More</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* PNDT Statutory Compliance Notice */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 sm:w-20 sm:h-16 shrink-0 bg-white rounded-lg p-2 flex items-center justify-center border border-gray-200 dark:border-slate-600 shadow-xs">
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <FiShield className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-800 leading-none block mt-1">PNDT ACT</span>
                </div>
              </div>

              <div className="text-sm text-slate-700 dark:text-gray-300 font-medium leading-normal">
                In India we supply and support{" "}
                <strong className="text-slate-900 dark:text-white font-bold">
                  &ldquo;The Pre-natal Diagnostic Techniques (PNDT) Act 1994&rdquo;
                </strong>{" "}
                registered centers only.
              </div>
            </div>
          </div>

          {/* Right: Retro Classic Vision & Mission Tiles (Scaled to ~40%) */}
          <div className="lg:col-span-3 flex sm:flex-row lg:flex-row justify-start lg:justify-end gap-3 self-start">
            {/* Our Vision Card */}
            <Link
              href="/about-us#vision"
              className="group w-28 sm:w-32 flex flex-col bg-[#0284c7] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all border border-blue-600 shrink-0"
            >
              {/* Top Accent Stripe */}
              <div className="h-1 bg-gradient-to-r from-pink-500 to-rose-500 w-full" />

              <div className="p-3 sm:p-3.5 flex flex-col items-center justify-center aspect-square">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white bg-blue-600/50 group-hover:scale-105 transition-transform">
                  <FiEye className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-[#0369a1] py-1.5 px-1 text-center text-white font-bold text-xs tracking-tight border-t border-blue-400/30 group-hover:bg-[#075985] transition-colors whitespace-nowrap">
                Our Vision
              </div>
            </Link>

            {/* Our Mission Card */}
            <Link
              href="/about-us#mission"
              className="group w-28 sm:w-32 flex flex-col bg-[#0284c7] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all border border-blue-600 shrink-0"
            >
              {/* Top Accent Stripe */}
              <div className="h-1 bg-gradient-to-r from-pink-500 to-rose-500 w-full" />

              <div className="p-3 sm:p-3.5 flex flex-col items-center justify-center aspect-square">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white bg-blue-600/50 group-hover:scale-105 transition-transform">
                  <FiFlag className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-[#0369a1] py-1.5 px-1 text-center text-white font-bold text-xs tracking-tight border-t border-blue-400/30 group-hover:bg-[#075985] transition-colors whitespace-nowrap">
                Our Mission
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Section: Our Services Grid */}
      <section className="bg-slate-100 dark:bg-slate-800/60 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-2.5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((srv, idx) => (
            <Link
              key={idx}
              href={srv.link}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-200 dark:border-slate-700 transition-all"
            >
              {/* Image Preview Container */}
              <div className="relative h-36 sm:h-40 bg-white p-3 flex items-center justify-center overflow-hidden border-b border-gray-100 dark:border-slate-800">
                <Image
                  src={srv.image}
                  alt={srv.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-2 mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Charcoal Bottom Banner */}
              <div className="bg-[#3f3f46] group-hover:bg-slate-900 dark:group-hover:bg-primary py-3.5 px-2 text-center text-white font-bold text-sm sm:text-base tracking-wide transition-colors">
                {srv.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
