import { getAllDevices, getDeviceById } from "@/lib/getDevices";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MdChevronRight, MdArchitecture, MdDesktopWindows, MdSmartToy, MdCheckCircle, MdRequestQuote, MdDownload, MdSpeed, MdTv, MdMemory, MdVerified, MdRadioButtonChecked } from "react-icons/md";
import DeviceGallery from "@/components/DeviceGallery";

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
    image,
    status,
    specifications,
  } = device;

  // Derive top specs from 'other' object
  const otherSpecs = specifications?.other || {};
  const architecture = otherSpecs["Architecture"] || otherSpecs["Technology"] || otherSpecs["Detector"] || "Standard";
  const monitor = otherSpecs["Monitor"] || otherSpecs["Resolution"] || "N/A";
  const processing = otherSpecs["Processing"] || otherSpecs["Speed"] || otherSpecs["Automation"] || "Standard";
  const warranty = otherSpecs["Warranty"] || "1 Year Included";
  const application = otherSpecs["Application"] || "General";

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
            images={device.images || [device.image, device.image, device.image]} 
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
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <MdArchitecture className="text-primary text-[24px]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-on-surface dark:text-white">{architecture} Architecture</h4>
                  <p className="text-sm text-on-surface-variant dark:text-gray-300">State-of-the-art framework for optimal performance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <MdDesktopWindows className="text-primary text-[24px]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-on-surface dark:text-white">{monitor} Display</h4>
                  <p className="text-sm text-on-surface-variant dark:text-gray-300">High-resolution monitor for clinical precision.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <MdSmartToy className="text-primary text-[24px]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-on-surface dark:text-white">Advanced Workflow</h4>
                  <p className="text-sm text-on-surface-variant dark:text-gray-300">Automated tools included for faster throughput.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-8 space-y-6 mt-auto">
            <div className="flex flex-col gap-4">
              <button className="w-full py-3 bg-primary-container dark:bg-slate-700 text-on-primary rounded-full hover:bg-primary transition-colors font-semibold flex items-center justify-center gap-2 shadow-sm">
                <MdRequestQuote className="text-sm" /> Request Quote
              </button>
              <button className="w-full py-3 bg-transparent border border-outline dark:border-slate-600 text-on-surface dark:text-white rounded-full hover:bg-surface-container-low dark:bg-slate-800 transition-colors font-semibold flex items-center justify-center gap-2">
                <MdDownload className="text-sm" /> Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Specs Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
        <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-xl p-4 flex items-center gap-4">
          <MdSpeed className="text-primary text-[24px]" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-outline dark:text-gray-400 font-semibold">Architecture</div>
            <div className="text-sm font-medium text-on-surface dark:text-white">{architecture}</div>
          </div>
        </div>
        <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-xl p-4 flex items-center gap-4">
          <MdTv className="text-primary text-[24px]" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-outline dark:text-gray-400 font-semibold">Monitor / Output</div>
            <div className="text-sm font-medium text-on-surface dark:text-white">{monitor}</div>
          </div>
        </div>
        <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-xl p-4 flex items-center gap-4">
          <MdMemory className="text-primary text-[24px]" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-outline dark:text-gray-400 font-semibold">Processing</div>
            <div className="text-sm font-medium text-on-surface dark:text-white">{processing}</div>
          </div>
        </div>
        <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-xl p-4 flex items-center gap-4">
          <MdVerified className="text-primary text-[24px]" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-outline dark:text-gray-400 font-semibold">Warranty</div>
            <div className="text-sm font-medium text-on-surface dark:text-white">{warranty}</div>
          </div>
        </div>
      </div>

      {/* Detailed Specs Tabs */}
      <div className="pt-8">
        <div className="border-b border-outline-variant dark:border-slate-700 flex gap-8 mb-6">
          <button className="pb-4 border-b-2 border-primary text-primary font-semibold text-sm">Technical Specs</button>
          <button className="pb-4 border-b-2 border-transparent text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:text-white font-semibold text-sm">Transducers</button>
          <button className="pb-4 border-b-2 border-transparent text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:text-white font-semibold text-sm">Warranty & Support</button>
        </div>
        <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Dimensions</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{specifications.dimensions}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Weight</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{specifications.weight}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Power Requirements</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{specifications.powerRequirements}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Operating Temperature</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{specifications.operatingTemperature}</p>
              </div>
            </div>
            {Object.entries(otherSpecs).map(([key, value]) => (
              <div key={key} className="flex gap-4">
                <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
                <div>
                  <h4 className="text-base font-semibold text-on-surface dark:text-white">{key}</h4>
                  <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
