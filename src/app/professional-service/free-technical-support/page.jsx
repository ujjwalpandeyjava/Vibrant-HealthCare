import Link from "next/link";
import { MdSupportAgent } from "react-icons/md";

export const metadata = {
  title: "Free Technical Support | Professional Services",
};

export default function FreeTechnicalSupportPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>
      <div className="max-w-3xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/30 text-green-500 flex items-center justify-center mb-6">
          <MdSupportAgent className="text-4xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Free Technical Support</h1>
        <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
          We offer complimentary baseline technical support for all our clients. Whether you have questions regarding basic equipment operations, software usage, or simple troubleshooting, our dedicated team is happy to help at no additional cost.
        </p>
      </div>
    </div>
  );
}

