"use client";

import Image from "next/image";
import Link from "next/link";

export default function SearchProductCard({ device }) {
  if (!device) return null;

  const applicationText =
    device.specifications?.other?.Application ||
    device.applications ||
    device.specifications?.tabs?.techSpec?.find((t) =>
      t.title?.toLowerCase()?.includes("application")
    )?.description ||
    "General";

  return (
    <Link
      href={`/products/${device.id}#model_${device.model.replace(/\s+/g, '_')}`}
      className="bg-white dark:bg-slate-900/90 border border-gray-200/80 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
    >
      <div className="aspect-video bg-gradient-to-b from-gray-50 to-gray-100/60 dark:from-slate-950 dark:to-slate-900/90 flex items-center justify-center p-6 relative overflow-hidden border-b border-gray-100 dark:border-slate-800/80">
        <span className="absolute top-3 right-3 z-10 font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white/80 dark:bg-slate-800/80 text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-slate-700/70 shadow-2xs backdrop-blur-xs">
          #{device.id}
        </span>
        <Image
          alt={device.name}
          className="object-contain p-4 dark:drop-shadow-[0_8px_16px_rgba(59,130,246,0.12)] group-hover:scale-105 transition-transform duration-300"
          src={device.images?.[0] || "/placeholder.svg"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-primary dark:text-blue-400 text-xs font-bold mb-1.5 uppercase tracking-wider">
          {device.manufacturer}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex-grow group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
          {device.name}
        </h3>

        <div className="mb-4">
          <span className="inline-block bg-blue-50/80 dark:bg-blue-950/70 text-primary dark:text-blue-300 text-xs px-3 py-1 rounded-full font-semibold border border-blue-200/60 dark:border-blue-800/60 shadow-xs">
            {device.category}
          </span>
        </div>

        <div className="flex flex-col gap-3 pt-3.5 border-t border-gray-100 dark:border-slate-800/80 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-gray-400 font-medium">
              Application
            </span>
            <span className="text-gray-900 dark:text-slate-200 font-semibold text-right">
              {applicationText}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
