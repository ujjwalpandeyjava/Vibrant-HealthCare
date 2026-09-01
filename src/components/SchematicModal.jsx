"use client";

import React, { useState, useEffect } from "react";
import { Maximize2, X, ZoomIn, ZoomOut, RotateCcw, Download } from "lucide-react";

export default function SchematicModal({ schematicUrl, deviceName, model }) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const resetZoom = () => setZoom(1);
  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.6));

  if (!schematicUrl) return null;

  return (
    <>
      {/* Trigger Card Button */}
      <div className="relative group rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg hover:border-cyan-500/50 transition-all">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Hardware Blueprint / Pinout
            </h4>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 hover:bg-cyan-900/60 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Inspect Blueprint
          </button>
        </div>

        {/* Embedded Preview */}
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer relative aspect-[16/10] bg-slate-950 p-4 flex items-center justify-center overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={schematicUrl}
            alt={`${deviceName} Schematic Blueprint`}
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
          />
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-cyan-400 text-xs font-mono border border-cyan-500/30 flex items-center gap-2 shadow-2xl">
              <Maximize2 className="w-4 h-4" /> Click to Expand
            </span>
          </div>
        </div>
      </div>

      {/* Fullscreen Inspector Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl h-[88vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-mono">
                  {deviceName} ({model})
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Pinout Blueprint &amp; Subsystem Schematic
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-lg bg-slate-800 border border-slate-700 p-0.5 text-slate-300">
                  <button
                    onClick={zoomOut}
                    title="Zoom Out"
                    className="p-1.5 hover:bg-slate-700 rounded text-slate-300 hover:text-white"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={resetZoom}
                    title="Reset Zoom"
                    className="p-1.5 hover:bg-slate-700 rounded text-xs font-mono px-2 text-slate-300 hover:text-white"
                  >
                    {Math.round(zoom * 100)}%
                  </button>
                  <button
                    onClick={zoomIn}
                    title="Zoom In"
                    className="p-1.5 hover:bg-slate-700 rounded text-slate-300 hover:text-white"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href={schematicUrl}
                  download
                  title="Download SVG Blueprint"
                  className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  title="Close (Esc)"
                  className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-rose-950/80 hover:border-rose-700 transition-colors ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Viewport */}
            <div className="flex-1 bg-[#060a12] relative overflow-auto p-6 flex items-center justify-center select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={schematicUrl}
                alt={`${deviceName} Schematic Blueprint`}
                style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
                className="max-w-full max-h-full object-contain transition-transform duration-150 shadow-2xl rounded"
              />
            </div>

            {/* Footer Bar */}
            <div className="px-6 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Vector Scalable Vector Graphic (.SVG)</span>
              <span>Press ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
