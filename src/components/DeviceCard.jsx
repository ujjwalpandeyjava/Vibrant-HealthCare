"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, MapPin, Layers } from "lucide-react";

export default function DeviceCard({ device }) {
  if (!device) return null;

  const { id, name, model, category, manufacturer, serialNumber, image, specifications } = device;

  // Grab first 3 core specs to display on preview card
  const specEntries = Object.entries(specifications || {})
    .filter(([key]) => key !== "other" && key !== "description")
    .slice(0, 3);

  return (
    <div className="group rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 flex flex-col overflow-hidden">
      {/* Visual Image Header */}
      <div className="relative aspect-[16/10] bg-slate-950/80 p-6 flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/90 text-slate-300 border border-slate-700 backdrop-blur-sm">
            <Layers className="w-3 h-3 text-cyan-400" />
            {category}
          </span>
        </div>

        {image && (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4 filter group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      {/* Body Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Manufacturer & Model Tag */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
            <span>{manufacturer}</span>
            <span className="text-cyan-400 font-bold">{model}</span>
          </div>

          {/* Device Title */}
          <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
            {name}
          </h3>

          {/* Serial */}
          <div className="mt-2 space-y-1 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span>{serialNumber}</span>
            </div>
          </div>

          {/* Quick Specs Snippet */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
            {specEntries.map(([key, val]) => (
              <div key={key} className="flex items-center justify-between text-xs">
                <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                <span className="font-mono text-slate-200 font-medium">{String(val)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* View Details Action Link */}
        <Link
          href={`/products/${id}#model_${device.model.replace(/\s+/g, '_')}`}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-800/80 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-slate-700/80 hover:border-cyan-400 shadow-md"
        >
          <span>Inspect Specifications</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
