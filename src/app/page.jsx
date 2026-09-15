import ClassicOverviewServices from "@/components/ClassicOverviewServices";
import FeaturedInventory from "@/components/FeaturedInventory";
import HeroSection from "@/components/HeroSection";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import MostSoldProducts from "@/components/MostSoldProducts";
import SolutionsGrid from "@/components/SolutionsGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TopSellingEquipment from "@/components/TopSellingEquipment";

export default async function LandingPage() {


  return (
    <div className="flex flex-col gap-16 pb-16 animate-in fade-in duration-300 overflow-x-clip">

      <HomeHeroCarousel />

      <HeroSection />

      <ClassicOverviewServices />

      <SolutionsGrid />

      <TopSellingEquipment />

      <FeaturedInventory />

      <TestimonialCarousel />

      <MostSoldProducts />

    </div>
  );
}
