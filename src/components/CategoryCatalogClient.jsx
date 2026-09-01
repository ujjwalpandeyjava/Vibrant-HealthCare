"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import QuoteModal from "./QuoteModal";

export default function CategoryCatalogClient({
  initialDevices = [],
  categoryTitle = "Transducer",
  sidebarCategories = ["3D/4D", "TV", "Linear", "Convex", "Cardiac"],
  typeKey = "probeType"
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedSidebarCat, setSelectedSidebarCat] = useState("All");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Dynamically extract unique brand/manufacturer names from JSON
  const extractedBrands = Array.from(
    new Set(
      initialDevices
        .map((d) => d.manufacturer || d.brand)
        .filter(Boolean)
    )
  );
  const brands = ["All", ...(extractedBrands.length > 0 ? extractedBrands : ["GE", "Philips", "Siemens", "Mindray"])];

  // Dynamically extract unique category/type names from JSON
  const extractedCategories = Array.from(
    new Set(
      initialDevices
        .map((d) => d[typeKey] || d.probeType || d.spareType)
        .filter(Boolean)
    )
  );
  const categoryList = extractedCategories.length > 0 ? extractedCategories : sidebarCategories;

  // Filtering logic
  const filteredDevices = initialDevices.filter((device) => {
    // Search filter
    const matchesSearch = searchQuery === "" ||
      device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (device.model && device.model.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (device.description && device.description.toLowerCase().includes(searchQuery.toLowerCase()));

    // Brand filter
    const deviceBrand = (device.manufacturer || "").toLowerCase();
    const matchesBrand = selectedBrand === "All" || deviceBrand.includes(selectedBrand.toLowerCase());

    // Sidebar Category filter
    const deviceType = (device[typeKey] || device.spareType || "").toLowerCase();
    const matchesCategory = selectedSidebarCat === "All" || deviceType.includes(selectedSidebarCat.toLowerCase());

    return matchesSearch && matchesBrand && matchesCategory;
  });

  const handleQuoteClick = (product) => {
    setSelectedProduct(product);
    setQuoteModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* 1. Top Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search in ${categoryTitle}...`}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-800 dark:text-white transition-all placeholder:text-gray-400"
          />
        </div>
        <button
          onClick={() => {}}
          className="bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <FiSearch className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>

      {/* 2. Text-Based Brand Tabs Bar */}
      <div className="mb-8 border border-gray-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-2 overflow-x-auto no-scrollbar shadow-sm">
        <div className="flex items-center gap-2 min-w-max">
          {brands.map((brand) => {
            const isActive = selectedBrand === brand;
            return (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all border ${
                  isActive
                    ? "border-primary bg-primary/10 text-primary dark:text-blue-400 shadow-sm"
                    : "border-transparent text-slate-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`}
              >
                {brand === "All" ? "ALL BRANDS" : brand.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Grid: Sidebar + Product List */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Category Sidebar */}
        <div className="lg:w-56 shrink-0">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
              Categories
            </h4>
            <div className="space-y-1.5">
              <button
                onClick={() => setSelectedSidebarCat("All")}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  selectedSidebarCat === "All"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                All Types
              </button>
              {categoryList.map((cat) => {
                const isActive = selectedSidebarCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedSidebarCat(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Product List View */}
        <div className="flex-1 space-y-6">
          {filteredDevices.length > 0 ? (
            filteredDevices.map((device) => (
              <div
                key={device.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                {/* Product Image */}
                <div className="w-full sm:w-48 h-48 bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 relative flex items-center justify-center shrink-0 border border-gray-100 dark:border-slate-800">
                  <Image
                    src={device.images?.[0] || "/placeholder.svg"}
                    alt={device.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Product Info & Specs */}
                <div className="flex-1 flex flex-col justify-between h-full w-full">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                      {device.name}
                    </h3>

                    {device.bandwidth && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-1.5">
                        <span className="font-bold text-slate-800 dark:text-white">Bandwidth: </span>
                        {device.bandwidth}
                      </p>
                    )}

                    {device.applications && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-1.5">
                        <span className="font-bold text-slate-800 dark:text-white">Applications: </span>
                        {device.applications}
                      </p>
                    )}

                    {device.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                        <span className="font-bold text-slate-800 dark:text-white">Description: </span>
                        {device.description}
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4 pt-2">
                    <Link
                      href={`/products/${device.id}`}
                      className="bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors text-sm text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleQuoteClick(device)}
                      className="bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors text-sm text-center"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-32 px-8 md:px-16 bg-gray-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-gray-200 dark:border-slate-700 my-4 shadow-sm">
              <p className="text-lg text-slate-500 dark:text-slate-400">
                No items found for the selected brand and category filters.
              </p>
            </div>
          )}
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
