import { getAllDevices } from "@/lib/getDevices";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import CategoryCatalogClient from "@/components/CategoryCatalogClient";
import ProductInquirySection from "@/components/ProductInquirySection";
import { Suspense } from "react";

export default async function AccessoriesPage() {
  const allDevices = await getAllDevices();
  const accessoriesDevices = allDevices.filter(d => 
    d.category && d.category.toLowerCase().includes("accessor")
  );

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      <ProfessionalServiceBanner 
        bannerText="CLINICAL & MEDICAL ACCESSORIES" 
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBDf5Z1GGLUeJviCgCjGZr-2oePbd75O9twv8nK3hwB8Uh4KaZ0VGuqMY6etZrXUapO-b1wD-xttjIIEfchSB9XU2qX6njszhNKOngAmtOJxIeCEcy62LcVjogwt6MtNW5LGMl1Zql4XxwYiDP__mv5Q3ssVqG9dJB2_sIyer1Z6zZAgTelNgLLRoYwLBBrawpgrUxjsI5daBybBuv2fktWp_zy8orZCMzWh8oaxsHKgaNpugF0aCWw"
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
        <CategoryCatalogClient 
          initialDevices={accessoriesDevices} 
          categoryTitle="Accessories"
          typeKey="accessoryType"
        />
      </Suspense>
      <ProductInquirySection categoryName="Medical Accessories" />
    </div>
  );
}
