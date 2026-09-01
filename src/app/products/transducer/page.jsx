import { getAllDevices } from "@/lib/getDevices";
import SearchClient from "@/components/SearchClient";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import { Suspense } from "react";

export const metadata = {
  title: "Ultrasound Transducers & Probes | Vibrant Healthcare",
  description: "Explore high-performance ultrasound transducers and probes.",
};

export default async function TransducerPage() {
  const devices = await getAllDevices();
  const transducerDevices = devices.filter(d => 
    d.category && d.category.toLowerCase().includes("transducer")
  );

  return (
    <div className="flex flex-col w-full min-h-screen">
      <ProfessionalServiceBanner 
        bannerText="ULTRASOUND TRANSDUCERS & PROBES" 
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuD7C0H1EBrANODKoLWHEivt8dZmaAEQQWyKGNYlKa8cTHuK3Yaq2j6KCZz6LandingPageq2j6KCZz6UcQs82pS6sgaINx1CszoA5Z70hqm6J4yM8hsfOfiF50Ow8sCjc7K9fSQcYatQ5UFQu1Xrissrb7U327VFfoFKs3sbYqqKRBIyZlqPrSzmmDtKr7G7QJpw-f9VpZ_82lwueR1hadSQPb2BD8JFBB3iAbsU3lI533STRrZYnPIfvGsamdPugnBj2oIFltadg" 
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <SearchClient initialDevices={transducerDevices.length > 0 ? transducerDevices : devices} hideBanner={true} />
      </Suspense>
    </div>
  );
}
