import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

export default function MostSoldProducts({ products = [] }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            <span>Best Sellers</span>
          </div>
          <h2 className="text-3xl font-extrabold text-on-surface dark:text-white">
            Most Sold Products
          </h2>
          <p className="text-textMuted dark:text-gray-400 text-sm mt-1">
            Our highest volume systems &amp; transducers trusted by leading medical centers.
          </p>
        </div>
        <Link
          href="/products/machine"
          className="text-primary font-bold text-sm flex items-center space-x-1 hover:underline shrink-0"
        >
          <span>Explore All Products</span>
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="bg-gray-50 dark:bg-slate-800/60 p-4 h-48 relative flex items-center justify-center border-b border-gray-100 dark:border-slate-800">
                <Image
                  src={product.images?.[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                <span className="absolute top-3 right-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm border border-slate-700">
                  Code: #{product.code}
                </span>
                {product.tier && (
                  <span className="absolute top-3 left-3 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-300 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                    {product.tier}
                  </span>
                )}
              </div>

              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 mb-1 block">
                  {product.manufacturer} &bull; {product.category}
                </span>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              <Link
                href={`/products/${product.id}`}
                className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center space-x-2"
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
