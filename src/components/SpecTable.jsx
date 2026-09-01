"use client";

import React, { useState } from "react";
import { formatKeyToTitle } from "@/lib/utils";
import { Copy, Check, Info } from "lucide-react";

export default function SpecTable({ specifications }) {
  const [copiedKey, setCopiedKey] = useState(null);

  if (!specifications || typeof specifications !== "object") {
    return <div className="text-slate-500 text-sm">No specifications available.</div>;
  }

  const { other, description, ...coreSpecs } = specifications;

  const handleCopy = (key, value) => {
    navigator.clipboard.writeText(String(value));
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const renderRow = (key, value, isSub = false) => {
    const formattedLabel = formatKeyToTitle(key);
    const displayValue = typeof value === "object" ? JSON.stringify(value) : String(value);

    return (
      <tr
        key={key}
        className="border-b border-slate-800/80 hover:bg-slate-800/30 transition-colors group"
      >
        <td className="py-3 px-4 text-xs sm:text-sm font-medium text-slate-300 w-1/3">
          <span className={isSub ? "text-cyan-400/90 pl-2 border-l-2 border-cyan-500/40" : ""}>
            {formattedLabel}
          </span>
        </td>
        <td className="py-3 px-4 text-xs sm:text-sm font-mono text-slate-200 flex items-center justify-between gap-2">
          <span>{displayValue}</span>
          <button
            onClick={() => handleCopy(key, displayValue)}
            title="Copy value"
            className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-opacity"
          >
            {copiedKey === key ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="space-y-6">
      {/* Description Highlight */}
      {description && (
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Instrument Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
          </div>
        </div>
      )}

      {/* Primary Technical Specifications Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="bg-slate-800/60 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Hardware &amp; Operational Parameters
          </h3>
          <span className="text-[11px] font-mono text-slate-400">
            {Object.keys(coreSpecs).length} specs recorded
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              {Object.entries(coreSpecs).map(([key, value]) => renderRow(key, value, false))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic 'Other' Specifications Block */}
      {other && typeof other === "object" && Object.keys(other).length > 0 && (
        <div className="rounded-xl border border-cyan-950/60 bg-gradient-to-b from-slate-900/80 to-cyan-950/20 overflow-hidden backdrop-blur-sm shadow-xl">
          <div className="bg-cyan-950/40 px-4 py-3 border-b border-cyan-900/40 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Auxiliary &amp; Structural Specifications (Other)
            </h3>
            <span className="text-[11px] font-mono text-cyan-400/80">
              {Object.keys(other).length} parameters
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {Object.entries(other).map(([key, value]) => renderRow(key, value, true))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
