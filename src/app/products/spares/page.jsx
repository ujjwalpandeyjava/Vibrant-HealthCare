import { getAllDevices } from "@/lib/getDevices";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import SearchClient from "@/components/SearchClient";
import { Suspense } from "react";

export default async function SparesPage() {
  const allDevices = await getAllDevices();
  const sparesDevices = allDevices.filter(d => 
    d.category && d.category.toLowerCase().includes("spare")
  );

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      <ProfessionalServiceBanner 
        bannerText="MEDICAL EQUIPMENT SPARES & PARTS" 
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBWx4rtKz42p85xFw1WiUudfJdnqVvBXJQsyWBvDkjTp3WEdof5vd_vtcyZg31kRBpjCx6pJat6uuQReGFtnRQ2vz6e-wEyFPaZwA16FT2ohq3vR5jWy2RIE6SCkTMpgP5RrNfjiCYvncH5AL1OfRzG9JBQoWn7PyNfTHMUX3ysoMXpf8TmOSObj27MzKZzMo2meqIyZtkrC-edgluQ0SwqVQM3kAhSuX3vQBKxtFkkomcN3Ii5m9Di9g"
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <SearchClient initialDevices={sparesDevices.length > 0 ? sparesDevices : allDevices} hideBanner={true} />
      </Suspense>
    </div>
  );
}
