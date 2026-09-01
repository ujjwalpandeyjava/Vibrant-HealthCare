import { MdWorkspacePremium, MdSupportAgent, MdVisibility, MdFlag, MdAccountBalance, MdLocationOn } from "react-icons/md";
import ProfessionalServiceBanner from "@/components/ProfessionalServiceBanner";

export const metadata = {
  title: "About Us | Vibrant Healthcare",
  description: "Learn more about Vibrant Healthcare and our mission.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full animate-in fade-in duration-300">
      <ProfessionalServiceBanner
        bannerText="ABOUT US"
        bannerImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng"
      />
      <div className="flex-grow w-full max-w-5xl mx-auto px-4 md:px-8 py-16">
        <div className="space-y-16">


          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-xl text-primary dark:text-blue-400 font-semibold leading-relaxed">
                Approachable professionalism in medical equipment sales, repair, and maintenance.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-on-surface dark:text-white">Our Story</h2>
              <p className="text-base text-on-surface-variant dark:text-gray-300 leading-relaxed">
                At Vibrant Healthcare, our goal is to empower medical professionals by providing them with the most reliable, state-of-the-art diagnostic and imaging equipment available. We understand that in healthcare, time and accuracy are critical. That&apos;s why we don&apos;t just sell equipment; we offer a comprehensive ecosystem of support, maintenance, and emergency repair services to ensure your clinic is always running smoothly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-surface-container dark:bg-slate-700 flex items-center justify-center text-primary dark:text-blue-400 mb-6">
                  <MdWorkspacePremium className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-on-surface dark:text-white mb-3">Quality Assured</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-400">
                  Every piece of equipment goes through rigorous testing by our certified technicians before it reaches your facility.
                </p>
              </div>
              <div className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-surface-container dark:bg-slate-700 flex items-center justify-center text-primary dark:text-blue-400 mb-6">
                  <MdSupportAgent className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-on-surface dark:text-white mb-3">24/7 Support</h3>
                <p className="text-sm text-on-surface-variant dark:text-gray-400">
                  Our dispatch team is always on standby to coordinate emergency repairs and minimize your clinical downtime.
                </p>
              </div>
            </div>
          </div>

          {/* Call To Action */}
          <div className="max-w-3xl mx-auto bg-surface-container-low dark:bg-slate-800 p-8 md:p-12 rounded-3xl mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface dark:text-white mb-4">Join Our Growing Network</h2>
            <p className="text-on-surface-variant dark:text-gray-300 mb-8 max-w-xl mx-auto">
              Hundreds of clinics trust Vibrant Healthcare to keep their operations moving. Discover how we can support your facility today.
            </p>
            <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contact Our Team
            </a>
          </div>

          <div className="space-y-16 pt-8">

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-white dark:bg-slate-800 shadow-lg rounded-none sm:rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700">
                <div className="bg-[#0073b7] text-white px-6 py-3 flex items-center gap-3 w-max">
                  <MdVisibility className="text-2xl" />
                  <h2 className="text-xl font-normal tracking-wide">Our Vision</h2>
                </div>
                <div className="p-8">
                  <p className="text-textMuted dark:text-gray-300 leading-relaxed text-base">
                    To be recognized as a benchmark for new age technology, superior
                    quality and personalized service, thereby gaining a nationwide acclaim
                    in the industry.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white dark:bg-slate-800 shadow-lg rounded-none sm:rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700">
                <div className="bg-[#ec4c74] text-white px-6 py-3 flex items-center gap-3 w-max">
                  <MdFlag className="text-2xl" />
                  <h2 className="text-xl font-normal tracking-wide">Our Mission</h2>
                </div>
                <div className="p-8">
                  <p className="text-textMuted dark:text-gray-300 leading-relaxed text-base">
                    By holding ourselves to the highest ethical standards, we are committed
                    to provide timely, quality services and support to every client.
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-none sm:rounded-xl border border-gray-100 dark:border-slate-700 relative mt-20">
              <div className="bg-[#0073b7] text-white px-8 py-3 flex items-center justify-center gap-3 w-max mx-auto absolute -top-[52px] left-1/2 -translate-x-1/2 h-[52px]">
                <MdAccountBalance className="text-2xl" />
                <h2 className="text-xl font-normal tracking-wide">Our Bank details</h2>
              </div>
              <div className="p-8 pt-12 text-center space-y-4 text-textMuted dark:text-gray-300 text-sm md:text-base">
                <p><span className="font-semibold text-on-surface dark:text-white">Name:</span> MAPMED IMAGING INDIA PVT LTD</p>
                <p><span className="font-semibold text-on-surface dark:text-white">Account Number:</span> 0114102000017082</p>
                <p><span className="font-semibold text-on-surface dark:text-white">Bank:</span> IDBI BANK</p>
                <p><span className="font-semibold text-on-surface dark:text-white">Bank IFSC:</span> IBKL0000114</p>
                <p><span className="font-semibold text-on-surface dark:text-white">Bank SWIFT Code:</span> IBKLINBB027</p>
                <p><span className="font-semibold text-on-surface dark:text-white">Branch:</span> CITY PLAZA,YMCA CROSS ROAD,KOZHIKODE-673001</p>
              </div>
            </div>

            {/* Location */}
            <div className="pt-16">
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="h-px bg-gray-200 dark:bg-slate-700 flex-grow max-w-[250px]"></div>
                <h2 className="text-4xl font-bold text-on-surface dark:text-white tracking-tight">Location</h2>
                <div className="h-px bg-gray-200 dark:bg-slate-700 flex-grow max-w-[250px]"></div>
              </div>
              <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.064560126442!2d75.78018317504825!3d11.256619688922442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641cb32ecf8!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
}
