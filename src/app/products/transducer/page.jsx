import { getAllDevices } from "@/lib/getDevices";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import CategoryCatalogClient from "@/components/CategoryCatalogClient";
import ProductInquirySection from "@/components/ProductInquirySection";
import { Suspense } from "react";

export default async function TransducerPage() {
  const allDevices = await getAllDevices();
  const transducerDevices = allDevices.filter(d => 
    d.category && d.category.toLowerCase().includes("transducer")
  );

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      <ProfessionalServiceBanner 
        bannerText="ULTRASOUND TRANSDUCERS & PROBES" 
        bannerImage="/images/banners/ultrasound-transducer.jpg"
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <CategoryCatalogClient 
          initialDevices={transducerDevices} 
          categoryTitle="Transducer"
          typeKey="probeType"
        />
      </Suspense>
      <ProductInquirySection categoryName="Transducers & Probes" />
    </div>
  );
}
