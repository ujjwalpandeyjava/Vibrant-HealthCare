import Link from "next/link";
import { MdBuild, MdCheckCircle } from "react-icons/md";
import ServiceModalButton from "@/components/ServiceModalButton";

export const metadata = {
  title: "Repairs | Professional Services",
  description: "Emergency and scheduled repair services for medical equipment.",
};

export default function RepairsPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/30 text-red-500 flex items-center justify-center mb-6">
            <MdBuild className="text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Equipment Repairs</h1>
          <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
            When critical medical equipment goes down, every minute counts. Our certified technicians provide rapid response repair services to diagnose and fix issues directly on-site.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">OEM Certified Technicians</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Our team is fully trained and certified across major manufacturers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Genuine OEM Parts</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">We source and utilize high-quality replacement parts to guarantee longevity.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Transparent Diagnostics</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Clear communication and up-front pricing before any work begins.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <ServiceModalButton 
              buttonText="Request a Repair" 
              modalTitle="Request Equipment Repair"
              prefilledMessage="I would like to request a repair service for my equipment. The issue I am experiencing is: "
            />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square md:aspect-[4/3] bg-surface-container dark:bg-slate-700 rounded-3xl overflow-hidden relative border border-outline-variant/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng" 
              alt="Technician repairing equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl max-w-xs shadow-xl hidden md:block">
            <p className="font-bold text-on-surface dark:text-white text-lg">99.8%</p>
            <p className="text-sm text-textMuted dark:text-gray-400">First-time fix rate across all imaging modalities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

