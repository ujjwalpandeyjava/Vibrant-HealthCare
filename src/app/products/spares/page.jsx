import { getAllDevices } from "@/lib/getDevices";
import SearchClient from "@/components/SearchClient";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import { Suspense } from "react";

export const metadata = {
  title: "Medical Equipment Spares & Parts | Vibrant Healthcare",
  description: "Original replacement parts and spare boards for medical equipment.",
};

export default async function SparesPage() {
  const devices = await getAllDevices();
  const spareDevices = devices.filter(d => 
    d.category && d.category.toLowerCase().includes("spares")
  );

  return (
    <div className="flex flex-col w-full min-h-screen">
      <ProfessionalServiceBanner 
        bannerText="MEDICAL SPARES & REPLACEMENT PARTS" 
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBWx4rtKz42p85xFw1WiUudfJdnqVvBXJQsyWBvDkjTp3WEdof5vd_vtcyZg31kRBpjCx6pJat6uuQReGFtnRQ2vz6e-wEyFPaZwA16FT2ohq3vR5jWy2RIE6SCkTMpgP5RrNfjiCYvncH5AL1OfRzG9JBQoWn7PyNfTHMUX3ysoMXpf8TmOSObj27MzKZzMo2meqIyZtkrC-edgluQ0SwqVQM3kAhSuX3vQBKxtFkkomcN3Ii5m9Di9g" 
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <SearchClient initialDevices={spareDevices.length > 0 ? spareDevices : devices} hideBanner={true} />
      </Suspense>
    </div>
  );
}
