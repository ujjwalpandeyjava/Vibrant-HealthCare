import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";

export const metadata = {
  title: "Professional Services | Lab Device",
};

export default function RefurbishUpgradeLayout({ children }) {
  return (
    <div className="flex-grow w-full animate-in fade-in duration-300">
      {/* Banner */}
      <ProfessionalServiceBanner />
      {children}
    </div>
  );
}

