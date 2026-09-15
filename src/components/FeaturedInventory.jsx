import { getAllDevices } from "@/lib/getDevices";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default async function FeaturedInventory() {
  const allDevices = await getAllDevices();
  const featureIds = [1006, 1018, 1015, 1019];

  const inventory = featureIds
    .map((id, index) => {
      const device = allDevices.find((d) => d.id === id);
      if (!device) return null;

      const badges = ["New", null, "New", null];
      const availabilities = ["In Stock", "In Stock", "In Stock", "Call for availability"];
      const canQuotes = [true, true, true, false];
      const opacities = [null, null, null, "opacity-50"];

      return {
        ...device,
        badge: badges[index],
        availability: availabilities[index],
        canQuote: canQuotes[index],
        opacity: opacities[index],
      };
    })
    .filter(Boolean);

  if (!inventory || inventory.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-on-surface dark:text-white">Featured Inventory</h2>
          <p className="text-textMuted dark:text-gray-400">Ready to ship, tested and certified.</p>
        </div>
        <Link href="/search" className="text-primary font-medium text-sm flex items-center space-x-1 hover:underline">
          <span>View All</span>
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventory.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col ${item.opacity || ""}`}
          >
            <div className="bg-gray-50 dark:bg-white rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-2 left-2 bg-slate-900/90 text-white text-[11px] font-bold px-2 py-1 rounded-md shadow-sm border border-slate-700 z-10">
                #{item.id}
              </span>
              {item.badge && (
                <span className="absolute top-2 right-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs px-2 py-1 rounded font-semibold z-10">
                  {item.badge}
                </span>
              )}
              <Image
                alt={item.name || item.title || "Product"}
                src={item.images?.[0] || "/placeholder.svg"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-2 mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
            <div className="flex items-center gap-1.5 mb-1 text-textMuted dark:text-gray-400">
              {item.icon && <item.icon className="w-3 h-3 text-primary" />}
              <p className="text-xs font-semibold tracking-wider uppercase">
                {item.category}
              </p>
            </div>
            <h3 className="font-bold text-sm mb-2 text-on-surface dark:text-white">{item.name || item.title}</h3>
            <p className="text-textMuted dark:text-gray-400 text-xs mb-4 line-clamp-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className={`text-sm font-medium ${item.canQuote ? "text-on-surface dark:text-white" : "text-gray-400"}`}>
                {item.availability}
              </span>
              {item.canQuote && (
                <Link
                  href={`/products/${item.id}#model_${(item.model || "").replace(/\s+/g, '_')}`}
                  className="bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  View Details
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
