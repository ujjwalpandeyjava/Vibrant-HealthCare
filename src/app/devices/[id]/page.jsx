import DeviceGallery from "@/components/DeviceGallery";
import ProductActions from "@/components/ProductActions";
import DeviceTabs from "@/components/DeviceTabs";
import { getAllDevices, getDeviceById } from "@/lib/getDevices";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "react-icons/md";
import { MdArchitecture, MdChevronRight, MdDesktopWindows, MdRadioButtonChecked, MdSmartToy } from "react-icons/md";

export async function generateStaticParams() {
  const devices = await getAllDevices();
  return devices.map((device) => ({
    id: device.id,
  }));
}

export default async function DeviceDetailPage({ params }) {
  const { id } = await params;
  const device = await getDeviceById(id);

  if (!device) {
    notFound();
  }

  const {
    name,
    category,
    manufacturer,
    images,
    specifications,
  } = device;

  const highlights = specifications?.highlights || [];
  const otherSpecs = specifications?.other || {};

  // Find core specs from highlights if possible, fallback to standard text
  const architecture = highlights.find(h => h.title.includes("Architecture"))?.detail || "Standard";
  const monitor = highlights.find(h => h.title.includes("Monitor"))?.detail || "N/A";

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex text-sm text-on-surface-variant dark:text-gray-300">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link href="/search" className="hover:text-primary transition-colors">Equipment</Link>
          </li>
          <li>
            <div className="flex items-center">
              <MdChevronRight className="text-sm mx-1" />
              <Link href="/search" className="hover:text-primary transition-colors">{category}</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <MdChevronRight className="text-sm mx-1" />
              <span className="text-on-surface dark:text-white font-medium">{name}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Product Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Images */}
        <div className="lg:col-span-7 space-y-4">
          <DeviceGallery
            images={images || []}
            manufacturer={manufacturer}
            name={name}
          />
        </div>

        {/* Right Column: Details & Actions */}
        <div className="lg:col-span-5 space-y-8 flex flex-col">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white mb-2">{name}</h1>
            <p className="text-lg text-on-surface-variant dark:text-gray-300">
              Premium {category.toLowerCase()} system designed to provide comprehensive tools for demanding clinical cases.
            </p>
          </div>

          {/* Core Specs Card */}
          <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-8 space-y-6">
            <h3 className="text-sm font-semibold text-outline dark:text-gray-400 uppercase tracking-wider">Core Specifications</h3>
            <div className="space-y-6">
              {(specifications.coreSpecs || []).map((spec, idx) => {
                const CoreIcon = idx === 0 ? MdArchitecture : idx === 1 ? MdDesktopWindows : MdSmartToy;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                      <CoreIcon className="text-primary text-[24px]" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-on-surface dark:text-white">{spec.title}</h4>
                      <p className="text-sm text-on-surface-variant dark:text-gray-300">{spec.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Card */}
          <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-8 space-y-6 mt-auto">
            <ProductActions device={device} />
          </div>
        </div>
      </div>

      {/* Quick Specs Bento Grid */}
      {highlights.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
          {highlights.map((h, i) => {
            let IconComponent;
            const title = h.title.toLowerCase();
            if (title.includes("architecture")) IconComponent = Icons.MdArchitecture;
            else if (title.includes("monitor") || title.includes("output")) IconComponent = Icons.MdTv;
            else if (title.includes("processing")) IconComponent = Icons.MdMemory;
            else if (title.includes("warranty")) IconComponent = Icons.MdVerified;
            else {
              const defaultIcons = [Icons.MdSpeed, Icons.MdTv, Icons.MdMemory, Icons.MdVerified];
              IconComponent = defaultIcons[i % defaultIcons.length];
            }

            return (
              <div key={i} className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-xl p-4 flex items-center gap-4">
                <IconComponent className="text-primary text-[24px]" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-outline dark:text-gray-400 font-semibold">{h.title}</div>
                  <div className="text-sm font-medium text-on-surface dark:text-white">{h.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detailed Specs Tabs */}
      <DeviceTabs tabs={specifications.tabs} baseSpecs={specifications} />
    </div>
  );
}
