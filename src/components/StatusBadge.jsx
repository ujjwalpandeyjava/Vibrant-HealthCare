"use client";

import React from "react";
import { CheckCircle2, AlertTriangle, PowerOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StatusBadge({ status, className }) {
  const normalized = (status || "").toUpperCase();

  if (normalized === "OPERATIONAL") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-500/30",
          className
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <CheckCircle2 className="w-3.5 h-3.5" />
        Operational
      </span>
    );
  }

  if (normalized === "IN_MAINTENANCE") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-950/80 text-amber-400 border border-amber-500/30",
          className
        )}
      >
        <AlertTriangle className="w-3.5 h-3.5" />
        In Maintenance
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-400 border border-slate-700",
        className
      )}
    >
      <PowerOff className="w-3.5 h-3.5" />
      Standby
    </span>
  );
}
