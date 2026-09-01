import { getAllDevices } from "@/lib/getDevices";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import MachinesClient from "@/components/MachinesClient";
import ProductInquirySection from "@/components/ProductInquirySection";
import { Suspense } from "react";

export default async function UltrasoundMachinePage() {
  const allDevices = await getAllDevices();
  const ultrasoundDevices = allDevices.filter(d => 
    d.category && d.category.toLowerCase().includes("ultrasound")
  );

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      <ProfessionalServiceBanner 
        bannerText="ULTRASOUND MACHINES" 
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng"
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <MachinesClient initialDevices={ultrasoundDevices.length > 0 ? ultrasoundDevices : allDevices} />
      </Suspense>
      <ProductInquirySection categoryName="Ultrasound Machines" />
    </div>
  );
}
