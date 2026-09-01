import Link from "next/link";
import { MdPhoneInTalk } from "react-icons/md";

export const metadata = {
  title: "Immediate Technical Support | Professional Services",
};

export default function ImmediateTechSupportPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>
      <div className="max-w-3xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
          <MdPhoneInTalk className="text-4xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Immediate Technical Support</h1>
        <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
          Get immediate assistance from our expert team for any technical issues you may face with your diagnostic equipment. We prioritize your up-time to ensure seamless patient care. Our support staff is always ready to guide you through troubleshooting steps to resolve minor issues quickly over the phone.
        </p>
      </div>
    </div>
  );
}

