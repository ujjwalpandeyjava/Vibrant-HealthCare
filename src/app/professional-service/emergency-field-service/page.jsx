import Link from "next/link";
import { MdLocalHospital } from "react-icons/md";

export const metadata = {
  title: "Emergency Field Service | Professional Services",
};

export default function EmergencyFieldServicePage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>
      <div className="max-w-3xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/30 text-red-500 flex items-center justify-center mb-6">
          <MdLocalHospital className="text-4xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Emergency Field Service</h1>
        <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
          When an issue cannot be resolved remotely, our emergency field service team is dispatched immediately. We understand the critical nature of medical equipment and aim to have a certified technician on-site within hours to restore functionality.
        </p>
      </div>
    </div>
  );
}

