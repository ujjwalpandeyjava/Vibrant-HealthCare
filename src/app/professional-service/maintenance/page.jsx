import Link from "next/link";
import { MdAccessTime, MdCheckCircle } from "react-icons/md";

export const metadata = {
  title: "Maintenance | Professional Services",
  description: "Preventative care and maintenance plans for your medical fleet.",
};

export default function MaintenancePage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="aspect-square md:aspect-[4/3] bg-surface-container dark:bg-slate-700 rounded-3xl overflow-hidden relative border border-outline-variant/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI2L2RbbbmqKfxbkHwPNVaCkNHgky_8NSFrfBouY6xhI-H3KPYBPRKTHeU9-WUPhr_PieBIZuEew227oopmgQ84v_3KRcxfzNhW1PIZVLacu06WmLtvGUTaGNj4_u-oVcwngxbJ0eXeOH0kDDOvS01BTVbmZTSOSAaCE5MbpSDVeUq_SiDz4QY2TQdRKvxHliREeolHLla2vEne7EL2O6kAkQSyQvWm8Nd9B2fx43cQh5-u_7xtxk_6Q" 
              alt="Medical equipment maintenance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/30 text-green-500 flex items-center justify-center mb-6">
            <MdAccessTime className="text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Preventative Maintenance</h1>
          <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
            Stop failures before they happen. Our comprehensive maintenance plans extend the lifespan of your systems, ensure regulatory compliance, and guarantee peak image quality.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Scheduled Inspections</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Routine check-ups tailored to your clinic's patient volume and operational hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Compliance & Certification</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Full documentation provided to satisfy state and federal regulatory audits.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Software Updates & Tuning</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Ensuring your systems run the latest secure software and maintain optimal calibration.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block">
              Discuss a Maintenance Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

