"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import DeviceCard from "./DeviceCard";

import { Search, X, SlidersHorizontal, LayoutGrid, List, RotateCcw, ArrowUpRight } from "lucide-react";

export default function DeviceExplorer({ initialDevices = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState("NAME_ASC");
  const [viewMode, setViewMode] = useState("GRID"); // 'GRID' | 'TABLE'

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(initialDevices.map((d) => d.category));
    return ["ALL", ...Array.from(set)];
  }, [initialDevices]);

  // Filter and sort items in real-time
  const filteredDevices = useMemo(() => {
    return initialDevices
      .filter((device) => {
        const query = searchTerm.toLowerCase().trim();
        const matchesSearch =
          !query ||
          [
            device.name,
            device.model,
            device.serialNumber,
            device.location,
            device.manufacturer,
            device.category,
          ].some((val) => val?.toLowerCase().includes(query));

        const matchesCategory =
          selectedCategory === "ALL" || device.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "NAME_ASC") return a.name.localeCompare(b.name);
        if (sortBy === "NAME_DESC") return b.name.localeCompare(a.name);
        if (sortBy === "MODEL_ASC") return a.model.localeCompare(b.model);
        if (sortBy === "MFG_ASC") return a.manufacturer.localeCompare(b.manufacturer);
        return 0;
      });
  }, [initialDevices, searchTerm, selectedCategory, sortBy]);

  const hasActiveFilters =
    searchTerm !== "" || selectedCategory !== "ALL";

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("ALL");
    setSortBy("NAME_ASC");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Control Bar */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 backdrop-blur-md shadow-2xl space-y-4">
        {/* Search Input and Primary Actions */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-2/3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search instruments by name, model, serial #, manufacturer, or room..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-slate-100 text-sm placeholder-slate-500 outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-200 rounded-md"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2.5 px-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-xs font-medium text-slate-300 focus:border-cyan-500 outline-none cursor-pointer font-mono"
            >
              <option value="NAME_ASC">Sort: Name (A-Z)</option>
              <option value="NAME_DESC">Sort: Name (Z-A)</option>
              <option value="MODEL_ASC">Sort: Model</option>
              <option value="MFG_ASC">Sort: Manufacturer</option>
            </select>

            {/* Grid / Table Toggle */}
            <div className="flex items-center bg-slate-950/80 border border-slate-700/80 rounded-xl p-0.5">
              <button
                onClick={() => setViewMode("GRID")}
                title="Grid View"
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "GRID"
                    ? "bg-cyan-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("TABLE")}
                title="Table View"
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "TABLE"
                    ? "bg-cyan-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
          <span className="text-xs font-medium text-slate-400 shrink-0 flex items-center gap-1 mr-1">
            <SlidersHorizontal className="w-3 h-3" /> Categories:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "bg-slate-950/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat === "ALL" ? "All Instruments" : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header and Quick Reset */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>
          Showing <span className="font-bold text-slate-200">{filteredDevices.length}</span> of{" "}
          <span className="font-bold text-slate-200">{initialDevices.length}</span> lab instruments
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Clear Filters
          </button>
        )}
      </div>

      {/* Equipment Presentation: GRID or TABLE */}
      {filteredDevices.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-200">No Instruments Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No laboratory equipment matched your active query. Try clearing filters or searching for alternative model/room terms.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="py-2 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === "GRID" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>
      ) : (
        /* High-Density Data Table View */
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  <th className="py-3.5 px-4">Instrument</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Model &amp; Serial</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {filteredDevices.map((device) => (
                  <tr
                    key={device.id}
                    className="hover:bg-slate-800/40 transition-colors group"
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {device.name}
                      </div>
                      <div className="text-xs text-slate-400">{device.manufacturer}</div>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] border border-slate-700">
                        {device.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-slate-300">
                      <div className="text-cyan-400 font-bold">{device.model}</div>
                      <div className="text-slate-500 text-[11px]">{device.serialNumber}</div>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/products/${device.id}#model_${device.model.replace(/\s+/g, '_')}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs font-medium transition-colors"
                      >
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
