import Link from "next/link";
import { MdLocalShipping, MdCheckCircle } from "react-icons/md";
import ServiceModalButton from "@/components/ServiceModalButton";

export const metadata = {
  title: "Dispatch | Professional Services",
  description: "24/7 Dispatch and rapid response network for medical facilities.",
};

export default function DispatchPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
          &larr; Back to Professional Services
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mb-6">
            <MdLocalShipping className="text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">24/7 Dispatch Center</h1>
          <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
            Our nationwide logistics network is always on standby. When you request an urgent intervention, our dispatch center immediately coordinates parts and personnel to reach your facility.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Always On Call</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Live operators ready to assist 24 hours a day, 365 days a year.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Expedited Parts Delivery</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Direct connections with regional warehouses for same-day or next-flight-out parts shipping.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-on-surface dark:text-white">Real-Time Tracking</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-300">Get live updates on technician arrival times and shipment statuses.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <ServiceModalButton 
              buttonText="Contact Dispatch" 
              modalTitle="Contact Dispatch Team"
              prefilledMessage="I need to contact the dispatch team regarding an urgent equipment failure or technical issue."
            />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square md:aspect-[4/3] bg-surface-container dark:bg-slate-700 rounded-3xl overflow-hidden relative border border-outline-variant/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1EWoXS3j2_5-wW_hjlHJOu4wld9dwFF3wWtLlfiLVE8F2qHUe9Xhq7IqdTOA75EJw8KnkQVl80ONgfeC3eN439S-okNnmTSg0v9MzB6wOtlfE8-xhN1HLUmUB9plZuWuupwk6NoWYaseDPe85or4NOabmdp-TWWcsSJgOcO0jzOG1oboCMbn57YyILZuag5GFfgCfrAU7riyX1ZEPsthRY6d2_wUEhCPnOV-I198nN0YgF_g4DDUgww" 
              alt="Dispatch and delivery"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

