import Breadcrumb from "@/components/Breadcrumb";
import DeviceGallery from "@/components/DeviceGallery";
import DeviceTabs from "@/components/DeviceTabs";
import ProductActions from "@/components/ProductActions";
import UrlHashSync from "@/components/UrlHashSync";
import { getAllDevices, getDeviceById } from "@/lib/getDevices";
import { notFound } from "next/navigation";
import * as Icons from "react-icons/md";
import { MdArchitecture, MdDesktopWindows, MdSmartToy } from "react-icons/md";

export async function generateStaticParams() {
  const devices = await getAllDevices();
  return devices.map((device) => ({ id: String(device.id) }));
}

export default async function DeviceDetailPage({ params }) {
  const { id } = await params;
  const device = await getDeviceById(id);

  if (!device) { notFound(); }

  const { name, category, manufacturer, images, specifications } = device;
  const highlights = specifications?.highlights || [];
  const hashId = `model_${device.model.replace(/\s+/g, '_')}`;

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      <UrlHashSync hash={hashId} />

      {/* Breadcrumb & ID Badge */}
      <div className="flex items-center justify-between gap-4">
        <Breadcrumb category={category} name={name} />
        <span id={hashId} className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-800/80 text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-slate-700/70 shadow-2xs backdrop-blur-xs scroll-mt-24">
          #{device.id} #{device.model}
        </span>
      </div>

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
