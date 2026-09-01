import Link from "next/link";
import { MdSettingsInputAntenna } from "react-icons/md";

export const metadata = {
  title: "Transducer Support | Professional Services",
};

export default function TransducerSupportPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>
      <div className="max-w-3xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mb-6">
          <MdSettingsInputAntenna className="text-4xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Transducer Support</h1>
        <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
          Transducers are sensitive and critical components of ultrasound systems. Our specialized transducer support covers physical repair, lens replacement, cable fixes, and comprehensive testing to ensure optimal image quality and patient safety.
        </p>
      </div>
    </div>
  );
}

