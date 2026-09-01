import { MdLocationOn, MdCall, MdMail, MdWarning } from "react-icons/md";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";
export const metadata = {
  title: "Contact Us | Vibrant Healthcare",
  description: "Get in touch with Vibrant Healthcare.",
};

export default function ContactPage() {
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
          <div className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-on-surface dark:text-white mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-on-surface dark:text-gray-200">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white dark:placeholder-gray-500"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-on-surface dark:text-gray-200">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white dark:placeholder-gray-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-on-surface dark:text-gray-200">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white dark:placeholder-gray-500"
                  placeholder="jane@clinic.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-on-surface dark:text-gray-200">Subject</label>
                <select 
                  id="subject"
                  className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm dark:text-white"
                >
                  <option>General Inquiry</option>
                  <option>Request Quote</option>
                  <option>Urgent Repair</option>
                  <option>Maintenance Plan</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-on-surface dark:text-gray-200">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full bg-surface dark:bg-slate-900 border border-outline-variant dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-sm resize-none dark:text-white dark:placeholder-gray-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

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
