"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiStar, FiHeart } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import QuoteModal from "./QuoteModal";

export default function MachinesClient({ initialDevices }) {
  const [activeTab, setActiveTab] = useState("4D Machines");
  const [activeTier, setActiveTier] = useState(null); // null means show all
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const tabs = ["4D Machines", "Color Doppler", "Portable"];
  
  const tiers = [
    { name: "High-end", display: "High Range", icon: FiStar, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30", border: "border-purple-200 dark:border-purple-800" },
    { name: "Midrange", display: "Mid Range", icon: FiHeart, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-800" },
    { name: "Economy", display: "Economy", icon: FaLeaf, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30", border: "border-green-200 dark:border-green-800" }
  ];

  const getTierInfo = (tierStr) => {
    if (!tierStr) return tiers[1];
    const s = tierStr.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (s.includes("high")) return tiers[0];
    if (s.includes("mid")) return tiers[1];
    if (s.includes("eco")) return tiers[2];
    return tiers[1];
  };

  // Filter logic
  const filteredDevices = initialDevices.filter((device) => {
    const matchesTab = device.machineType === activeTab;
    const deviceTierInfo = getTierInfo(device.tier);
    const matchesTier = activeTier ? deviceTierInfo.name === activeTier : true;
    return matchesTab && matchesTier;
  });

  const handleQuoteClick = (product) => {
    setSelectedProduct(product);
    setQuoteModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Top Tabs */}
      <div className="flex flex-wrap space-x-1 sm:space-x-4 border-b border-gray-200 dark:border-slate-800 mb-8 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveTier(null); // Reset tier filter on tab change
            }}
            className={`whitespace-nowrap py-3 px-6 text-sm font-medium border-b-2 transition-all relative ${
              activeTab === tab
                ? "border-primary text-primary dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          {filteredDevices.length > 0 ? (
            filteredDevices.map((device) => {
              const tierInfo = getTierInfo(device.tier);
              const TierIcon = tierInfo.icon;
              return (
                <div key={device.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row">
                  
                  {/* Image Section */}
                  <div className="sm:w-1/3 bg-gray-50 dark:bg-slate-800/50 p-5 flex flex-col justify-between relative min-h-[260px]">
                    <div className="z-20 h-7">
                      {device.tier && (
                        <span className={`inline-flex items-center justify-center gap-1.5 w-[105px] h-7 text-xs font-semibold rounded-full shadow-sm border ${tierInfo.bg} ${tierInfo.color} ${tierInfo.border}`}>
                          <TierIcon className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{tierInfo.display}</span>
                        </span>
                      )}
                    </div>
                    <div className="relative flex-1 w-full min-h-[180px] my-2">
                      <Image 
                        src={device.image || "/placeholder.svg"} 
                        alt={device.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                {/* Content Section */}
                <div className="sm:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                      {device.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                      {device.description || "Premium ultrasound imaging solution designed for comprehensive clinical applications with advanced diagnostic capabilities."}
                    </p>
                    
                    {device.yearLaunched && (
                      <div className="inline-block bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                        Launched: {device.yearLaunched}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <button 
                      onClick={() => handleQuoteClick(device)}
                      className="bg-primary hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-lg transition-colors flex-1 text-center sm:flex-none"
                    >
                      Get a Quote
                    </button>
                    <Link 
                      href={`/products/${device.id}`}
                      className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2.5 px-6 rounded-lg transition-colors border border-gray-200 dark:border-slate-700 flex-1 text-center sm:flex-none"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
          ) : (
            <div className="text-center py-32 px-8 md:px-16 bg-gray-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-gray-200 dark:border-slate-700 my-4 shadow-sm">
              <p className="text-lg text-slate-500 dark:text-slate-400">No machines found for the selected category.</p>
            </div>
          )}
        </div>

        {/* Sidebar Filters */}
        <div className="lg:w-64 shrink-0">
          <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6 shadow-sm">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Filter by Range
            </h4>
            <div className="space-y-3">
              {tiers.map((tier) => {
                const Icon = tier.icon;
                const isActive = activeTier === tier.name;
                return (
                  <button
                    key={tier.name}
                    onClick={() => setActiveTier(isActive ? null : tier.name)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      isActive 
                        ? `${tier.bg} ${tier.border} shadow-sm ring-1 ring-black/5 dark:ring-white/10` 
                        : "border-gray-100 dark:border-slate-800 hover:border-gray-200 dark:hover:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <div className={`p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm ${tier.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`font-medium text-sm ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                      {tier.display}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
