import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { MdMedicalServices, MdBuild, MdAccessTime, MdSettings } from "react-icons/md";

export default function SolutionsGrid() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-on-surface dark:text-white">
          Comprehensive Care Solutions
        </h2>
        <p className="text-textMuted dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need to maintain a state-of-the-art facility, all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Equipment Card */}
        <Link
          href="/search"
          className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between"
        >
          <div>
            <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
              <MdMedicalServices className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">
              Equipment
            </h3>
            <p className="text-textMuted dark:text-gray-400 text-sm mb-4">
              Latest medical technology sourced from trusted global manufacturers.
            </p>
          </div>
          <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
            <span>Browse</span>
            <FiArrowRight className="h-4 w-4" />
          </div>
        </Link>

        {/* Repair Card */}
        <Link
          href="/professional-service/repairs"
          className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between"
        >
          <div>
            <div className="bg-red-50 dark:bg-red-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-red-500 mb-4">
              <MdBuild className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">
              Repair
            </h3>
            <p className="text-textMuted dark:text-gray-400 text-sm mb-4">
              Rapid response emergency repairs to minimize your clinic&apos;s downtime.
            </p>
          </div>
          <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
            <span>Request</span>
            <FiArrowRight className="h-4 w-4" />
          </div>
        </Link>

        {/* Maintenance Card */}
        <Link
          href="/professional-service/maintenance"
          className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between"
        >
          <div>
            <div className="bg-green-50 dark:bg-green-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-green-500 mb-4">
              <MdAccessTime className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">
              Maintenance
            </h3>
            <p className="text-textMuted dark:text-gray-400 text-sm mb-4">
              Preventative care plans customized for your specific equipment fleet.
            </p>
          </div>
          <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
            <span>Plans</span>
            <FiArrowRight className="h-4 w-4" />
          </div>
        </Link>

        {/* Parts Card */}
        <Link
          href="/products/spares"
          className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between"
        >
          <div>
            <div className="bg-purple-50 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-purple-500 mb-4">
              <MdSettings className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">
              Parts
            </h3>
            <p className="text-textMuted dark:text-gray-400 text-sm mb-4">
              Extensive inventory of OEM and certified replacement components.
            </p>
          </div>
          <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
            <span>Search</span>
            <FiArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </div>
    </section>
  );
}
