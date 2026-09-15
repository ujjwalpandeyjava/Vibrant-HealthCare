"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MdSearch, MdClose } from "react-icons/md";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import SearchProductCard from "@/components/SearchProductCard";

export default function SearchClient({ initialDevices = [], hideBanner = false }) {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    const categoryQuery = searchParams.get("category");
    if (categoryQuery && initialDevices.length > 0) {
      const matched = initialDevices.find(
        d => d.category && (
          d.category.toLowerCase() === categoryQuery.toLowerCase() ||
          d.category.toLowerCase().includes(categoryQuery.toLowerCase()) ||
          categoryQuery.toLowerCase().includes(d.category.toLowerCase())
        )
      );
      if (matched) {
        setSelectedCategories([matched.category]);
      } else {
        setSelectedCategories([categoryQuery]);
      }
    } else if (categoryQuery) {
      setSelectedCategories([categoryQuery]);
    }

    const textQuery = searchParams.get("q");
    if (textQuery) {
      setSearchTerm(textQuery);
    }
  }, [searchParams, initialDevices]);

  // Compute available categories (modalities) based on current search term & selected brands
  const devicesMatchingBrandAndSearch = initialDevices.filter(device => {
    const sTerm = searchTerm.toLowerCase();
    const matchesSearch = !sTerm ||
      (device.name && device.name.toLowerCase().includes(sTerm)) ||
      (device.model && device.model.toLowerCase().includes(sTerm)) ||
      (device.category && device.category.toLowerCase().includes(sTerm)) ||
      (device.manufacturer && device.manufacturer.toLowerCase().includes(sTerm));

    const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(
      b => device.manufacturer && device.manufacturer.toLowerCase() === b.toLowerCase()
    );
    return matchesSearch && matchesBrand;
  });

  const availableCategoriesWithCounts = {};
  devicesMatchingBrandAndSearch.forEach(d => {
    if (d.category) {
      availableCategoriesWithCounts[d.category] = (availableCategoriesWithCounts[d.category] || 0) + 1;
    }
  });

  const allCategoryKeys = Array.from(new Set([
    ...Object.keys(availableCategoriesWithCounts),
    ...selectedCategories
  ])).sort();

  // Compute available brands based on current search term & selected categories
  const devicesMatchingCategoryAndSearch = initialDevices.filter(device => {
    const sTerm = searchTerm.toLowerCase();
    const matchesSearch = !sTerm ||
      (device.name && device.name.toLowerCase().includes(sTerm)) ||
      (device.model && device.model.toLowerCase().includes(sTerm)) ||
      (device.category && device.category.toLowerCase().includes(sTerm)) ||
      (device.manufacturer && device.manufacturer.toLowerCase().includes(sTerm));

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat =>
      device.category && (
        device.category.toLowerCase() === cat.toLowerCase() ||
        device.category.toLowerCase().includes(cat.toLowerCase()) ||
        cat.toLowerCase().includes(device.category.toLowerCase())
      )
    );
    return matchesSearch && matchesCategory;
  });

  const availableBrandsWithCounts = {};
  devicesMatchingCategoryAndSearch.forEach(d => {
    if (d.manufacturer) {
      availableBrandsWithCounts[d.manufacturer] = (availableBrandsWithCounts[d.manufacturer] || 0) + 1;
    }
  });

  const allBrandKeys = Array.from(new Set([
    ...Object.keys(availableBrandsWithCounts),
    ...selectedBrands
  ])).sort();

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => {
      const isSelected = prev.some(c => c.toLowerCase() === category.toLowerCase());
      if (isSelected) {
        return prev.filter(c => c.toLowerCase() !== category.toLowerCase());
      } else {
        return [...prev, category];
      }
    });
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => {
      const isSelected = prev.some(b => b.toLowerCase() === brand.toLowerCase());
      if (isSelected) {
        return prev.filter(b => b.toLowerCase() !== brand.toLowerCase());
      } else {
        return [...prev, brand];
      }
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSearchTerm("");
  };

  const filteredDevices = initialDevices.filter(device => {
    const sTerm = searchTerm.toLowerCase();
    const matchesSearch = !sTerm ||
      (device.name && device.name.toLowerCase().includes(sTerm)) ||
      (device.model && device.model.toLowerCase().includes(sTerm)) ||
      (device.category && device.category.toLowerCase().includes(sTerm)) ||
      (device.manufacturer && device.manufacturer.toLowerCase().includes(sTerm));

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat =>
      device.category && (
        device.category.toLowerCase() === cat.toLowerCase() ||
        device.category.toLowerCase().includes(cat.toLowerCase()) ||
        cat.toLowerCase().includes(device.category.toLowerCase())
      )
    );
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(
      b => device.manufacturer && device.manufacturer.toLowerCase() === b.toLowerCase()
    );
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      {!hideBanner && (
        <ProfessionalServiceBanner
          bannerText="MEDICAL EQUIPMENT"
          bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuA60cjCj6J8WH_Q5RNrTtWAyHNYo3fo9Z7qIsugj1OqpP0Q5GBxmLzhCV-R0uKg29x-sl6LI_Y7cX8KlbMPThSIe0fUvrnfCCmqmM9PCft1RrlFdEwPLelV-uOMDFYdH_X_FF3qbVbCxjnwdGty7WLwmT3EscBGhoYD3FgjD6NJLWdQimut0vpwLENt5MNPRYIerLeJansXTGSrkwzHIxQ6xn6x2-f3W59QGgGqepXT9qtTxvBlUEPC-w"
        />
      )}
      <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-8">

        {/* Breadcrumb & Header Area Starts */}
        <div className="mb-8">
          <nav className="flex text-sm text-outline dark:text-gray-400 mb-2 uppercase tracking-wide">
            <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-on-surface dark:text-white">MEDICAL EQUIPMENT</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Medical Equipment</h1>
            <span className="text-base text-outline dark:text-gray-400">Showing {filteredDevices.length} of {initialDevices.length} results</span>
          </div>
          <div className="mt-4 max-w-md">
            <div className="relative">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-outline dark:text-gray-400 text-[24px]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-outline-variant dark:border-slate-700 rounded-full text-sm focus:outline-none focus:border-primary text-on-surface dark:text-white bg-surface dark:bg-slate-800"
              />
            </div>
          </div>
        </div>
        {/* Breadcrumb & Header Area Ends */}

        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar Filters Starts Here*/}
          <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant dark:border-slate-700">
              <h2 className="text-2xl font-bold text-on-surface dark:text-white">Filters</h2>
              <button onClick={clearFilters} className="text-primary text-sm hover:underline">Clear All</button>
            </div>

            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedBrands.length > 0 || searchTerm) && (
              <div className="flex flex-wrap gap-2 pb-4 border-b border-outline-variant dark:border-slate-700">
                {selectedCategories.map(cat => (
                  <div key={cat} className="inline-flex items-center bg-surface-container dark:bg-slate-700 rounded px-3 py-1 text-sm text-on-surface dark:text-white border border-outline-variant dark:border-slate-600">
                    <span>Category: {cat}</span>
                    <button onClick={() => handleCategoryToggle(cat)} className="ml-2 text-outline dark:text-gray-400 hover:text-on-surface dark:hover:text-white">
                      <MdClose className="text-[16px]" />
                    </button>
                  </div>
                ))}
                {selectedBrands.map(brand => (
                  <div key={brand} className="inline-flex items-center bg-surface-container dark:bg-slate-700 rounded px-3 py-1 text-sm text-on-surface dark:text-white border border-outline-variant dark:border-slate-600">
                    <span>Brand: {brand}</span>
                    <button onClick={() => handleBrandToggle(brand)} className="ml-2 text-outline dark:text-gray-400 hover:text-on-surface dark:hover:text-white">
                      <MdClose className="text-[16px]" />
                    </button>
                  </div>
                ))}
                {searchTerm && (
                  <div className="inline-flex items-center bg-surface-container dark:bg-slate-700 rounded px-3 py-1 text-sm text-on-surface dark:text-white border border-outline-variant dark:border-slate-600">
                    <span>Search: {searchTerm}</span>
                    <button onClick={() => setSearchTerm("")} className="ml-2 text-outline dark:text-gray-400 hover:text-on-surface dark:hover:text-white">
                      <MdClose className="text-[16px]" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Brand Filter */}
            <div className="border-b border-outline-variant dark:border-slate-700 pb-6">
              <h3 className="text-sm font-semibold text-on-surface dark:text-white mb-4">Brand</h3>
              <div className="flex flex-col gap-3">
                {allBrandKeys.map(brand => {
                  const count = availableBrandsWithCounts[brand] || 0;
                  const isChecked = selectedBrands.some(b => b.toLowerCase() === brand.toLowerCase());
                  return (
                    <label key={brand} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleBrandToggle(brand)}
                          className="w-5 h-5 rounded border-outline dark:border-slate-600 text-primary focus:ring-primary bg-surface dark:bg-slate-800"
                        />
                        <span className="text-base text-on-surface dark:text-white group-hover:text-primary transition-colors">{brand}</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-textMuted dark:text-gray-400 font-medium">
                        {count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Category Filter */}
            <div className="pb-6">
              <h3 className="text-sm font-semibold text-on-surface dark:text-white mb-4">Category</h3>
              <div className="flex flex-col gap-3">
                {allCategoryKeys.map(category => {
                  const count = availableCategoriesWithCounts[category] || 0;
                  const isChecked = selectedCategories.some(c => c.toLowerCase() === category.toLowerCase());
                  return (
                    <label key={category} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCategoryToggle(category)}
                          className="w-5 h-5 rounded border-outline dark:border-slate-600 text-primary focus:ring-primary bg-surface dark:bg-slate-800"
                        />
                        <span className="text-base text-on-surface dark:text-white group-hover:text-primary transition-colors">{category}</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-textMuted dark:text-gray-400 font-medium">
                        {count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>
          {/* Sidebar Filters Ends Here */}

          {/* Product Grid Starts */}
          <div className="flex-grow">
            {filteredDevices.length === 0 ? (
              <div className="text-center py-12 text-on-surface-variant dark:text-gray-400">
                No equipment found matching your filters.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDevices.map(device => <SearchProductCard key={device.id} device={device} />)}
              </div>
            )}
          </div>
          {/* Product Grid Ends */}

        </div>
      </div>
    </div>
  );
}
