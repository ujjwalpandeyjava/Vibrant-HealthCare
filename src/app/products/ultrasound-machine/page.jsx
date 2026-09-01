import { getAllDevices } from "@/lib/getDevices";
import SearchClient from "@/components/SearchClient";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import { Suspense } from "react";

export const metadata = {
  title: "Ultrasound Machines | Vibrant Healthcare",
  description: "Browse our premium range of new and refurbished ultrasound systems.",
};

export default async function UltrasoundMachinesPage() {
  const devices = await getAllDevices();
  const ultrasoundDevices = devices.filter(d => 
    d.category && d.category.toLowerCase().includes("ultrasound")
  );

  return (
    <div className="flex flex-col w-full min-h-screen">
      <ProfessionalServiceBanner 
        bannerText="ULTRASOUND MACHINES" 
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng" 
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <SearchClient initialDevices={ultrasoundDevices.length > 0 ? ultrasoundDevices : devices} hideBanner={true} />
      </Suspense>
    </div>
  );
}
