import Link from "next/link";
import { MdAssignment } from "react-icons/md";

export const metadata = {
  title: "Annual Maintenance Agreement | Professional Services",
};

export default function AnnualMaintenanceAgreementPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>
      <div className="max-w-3xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
          <MdAssignment className="text-4xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Annual Maintenance Agreement</h1>
        <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
          Secure the longevity of your equipment with our comprehensive Annual Maintenance Agreements (AMA). An AMA ensures priority response times, covers routine preventive maintenance visits, and provides significant discounts on parts and labor for any repairs needed throughout the year.
        </p>
      </div>
    </div>
  );
}

