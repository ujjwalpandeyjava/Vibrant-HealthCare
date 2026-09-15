import { getAllDevices } from "@/lib/getDevices";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default async function TopSellingEquipment() {
  const allDevices = await getAllDevices();
  const products = [1000, 1001, 1002, 1005, 1004]
    .map((id) => allDevices.find((d) => String(d.id) === String(id)))
    .filter(Boolean);

  if (!products || products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-on-surface dark:text-white">
            Top Selling Equipment this month
          </h2>
          <p className="text-textMuted dark:text-gray-400">
            Our most requested high-performance diagnostic systems.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col"
          >
            <div className="relative h-48 bg-gray-50 dark:bg-white flex items-center justify-center p-4">
              <Image
                alt={item.name || item.title}
                src={item.images?.[0] || "/placeholder.svg"}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-4 mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-on-surface dark:text-white">
                {item.name || item.title}
              </h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                {item.description}
              </p>
              <Link
                href={`/products/${item.id}#model_${(item.model || "").replace(/\s+/g, '_')}`}
                className="w-full border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
