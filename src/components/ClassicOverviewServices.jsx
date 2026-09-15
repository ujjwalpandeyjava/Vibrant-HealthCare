"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiEye, FiFlag, FiShield } from "react-icons/fi";

import OurServices from "./OurServices";

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

      <OurServices />
    </div>
  );
}
