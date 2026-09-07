import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import ClassicOverviewServices from "@/components/ClassicOverviewServices";
import HeroSection from "@/components/HeroSection";
import SolutionsGrid from "@/components/SolutionsGrid";
import TopSellingEquipment from "@/components/TopSellingEquipment";
import FeaturedInventory from "@/components/FeaturedInventory";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import MostSoldProducts from "@/components/MostSoldProducts";
import { getAllDevices } from "@/lib/getDevices";

export default async function LandingPage() {
  const allDevices = await getAllDevices();
  const mostSoldCodes = [1000, 1001, 1004, 1010, 1012, 1015];
  const mostSoldProducts = mostSoldCodes
    .map((code) => allDevices.find((d) => d.code === code))
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-16 pb-16 animate-in fade-in duration-300 overflow-x-clip">
      {/* Featured Banner Carousel */}
      <HomeHeroCarousel />

      {/* Hero Section */}
      <HeroSection />

      {/* Classic Overview & Services Section */}
      <ClassicOverviewServices />

      {/* Solutions Grid */}
      <SolutionsGrid />

      {/* Top Selling Equipment this month */}
      <TopSellingEquipment />

      {/* Featured Inventory */}
      <FeaturedInventory />

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* Most Sold Products */}
      <MostSoldProducts products={mostSoldProducts} />
    </div>
  );
}
