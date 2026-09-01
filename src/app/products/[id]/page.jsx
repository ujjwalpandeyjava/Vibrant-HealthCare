import { getDeviceById } from "@/lib/getDevices";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  const product = await getDeviceById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen">
      {/* Navigation Bar / Breadcrumb */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link 
            href="/products/ultrasound-machine" 
            className="flex items-center text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Machines
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Gallery */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gray-50/50 dark:bg-slate-900/50 border-r border-gray-100 dark:border-slate-700 flex items-center justify-center min-h-[400px]">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src={product.images?.[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  {product.tier && (
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {product.tier}
                    </span>
                  )}
                  {product.machineType && (
                    <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {product.machineType}
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {product.description || "Premium medical equipment designed for optimal performance and reliability in clinical settings."}
                </p>
              </div>

              {/* Specifications List */}
              {product.specifications && (
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-gray-100 dark:border-slate-700 pb-2">
                    Key Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => {
                      if (key === "other") return null;
                      return (
                        <div key={key} className="flex flex-col">
                          <span className="text-sm text-gray-500 dark:text-gray-400 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="font-medium text-slate-800 dark:text-slate-200">{value}</span>
                        </div>
                      );
                    })}
                    {product.specifications.other && Object.entries(product.specifications.other).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize mb-1">{key}</span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link
                  href="/contact"
                  className="flex-1 bg-primary hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-xl transition-colors text-center text-lg flex items-center justify-center gap-2"
                >
                  Request a Quote
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
