import { getAllDevices } from "@/lib/getDevices";
import SearchClient from "@/components/SearchClient";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import { Suspense } from "react";

export const metadata = {
  title: "Clinical & Medical Accessories | Vibrant Healthcare",
  description: "High quality medical accessories and clinical utility supplies.",
};

export default async function AccessoriesPage() {
  const devices = await getAllDevices();
  const accessoryDevices = devices.filter(d => 
    d.category && d.category.toLowerCase().includes("accessories")
  );

  return (
    <div className="flex flex-col w-full min-h-screen">
      <ProfessionalServiceBanner 
        bannerText="CLINICAL & MEDICAL ACCESSORIES" 
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBDf5Z1GGLUeJviCgCjGZr-2oePbd75O9twv8nK3hwB8Uh4KaZ0VGuqMY6etZrXUapO-b1wD-xttjIIEfchSB9XU2qX6njszhNKOngAmtOJxIeCEcy62LcVjogwt6MtNW5LGMl1Zql4XxwYiDP__mv5Q3ssVqG9dJB2_sIyer1Z6zZAgTelNgLLRoYwLBBrawpgrUxjsI5daBybBuv2fktWp_zy8orZCMzWh8oaxsHKgaNpugF0aCWw" 
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <SearchClient initialDevices={accessoryDevices.length > 0 ? accessoryDevices : devices} hideBanner={true} />
      </Suspense>
    </div>
  );
}
