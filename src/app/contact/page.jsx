import { MdLocationOn, MdCall, MdMail, MdWarning } from "react-icons/md";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
import ContactForm from "@/components/ContactForm";
export const metadata = {
  title: "Contact Us | Vibrant Healthcare",
  description: "Get in touch with Vibrant Healthcare.",
};

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const defaultSubject = resolvedSearchParams?.subject || "General Inquiry";

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      <ProfessionalServiceBanner bannerText="CONTACT US" />
      <div className="w-full max-w-container-max mx-auto px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-lg text-textMuted dark:text-gray-400 max-w-2xl mx-auto">
            Whether you need an urgent repair, a quote for new equipment, or just have a general inquiry, our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm defaultSubject={defaultSubject} />

          {/* Contact Info */}
          <div className="space-y-8 flex flex-col justify-center lg:px-8">
            <div>
              <h3 className="text-xl font-bold text-on-surface dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-slate-800 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <MdLocationOn className="text-[20px]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface dark:text-gray-200">Headquarters</h4>
                    <p className="text-sm text-on-surface-variant dark:text-gray-400 mt-1 leading-relaxed">
                      100 Vibrant Way<br />
                      Innovation Park<br />
                      Seattle, WA 98101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-slate-800 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <MdCall className="text-[20px]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface dark:text-gray-200">Phone</h4>
                    <p className="text-sm text-on-surface-variant dark:text-gray-400 mt-1">
                      Sales: (555) 123-4567<br />
                      Support: (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-slate-800 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <MdMail className="text-[20px]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface dark:text-gray-200">Email</h4>
                    <p className="text-sm text-on-surface-variant dark:text-gray-400 mt-1">
                      info@vibranthealthcare.com<br />
                      support@vibranthealthcare.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary-container/10 dark:bg-slate-800 border border-secondary-container/20 dark:border-slate-700 rounded-2xl p-6 mt-4">
              <h4 className="font-bold text-secondary-container flex items-center gap-2 mb-2">
                <MdWarning />
                Emergency Dispatch
              </h4>
              <p className="text-sm text-on-surface-variant dark:text-gray-300">
                For urgent equipment failures, please call our 24/7 dispatch line immediately at <strong>1-800-VIBRANT</strong> for expedited service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
