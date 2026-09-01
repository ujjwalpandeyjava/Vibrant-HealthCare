import Link from "next/link";
import { MdBuild, MdAccessTime, MdLocalShipping, MdArrowForward, MdSupportAgent, MdMedicalServices, MdHeadsetMic, MdSensors, MdHandshake, MdOutlineAutorenew } from "react-icons/md";

export const metadata = {
  title: "Professional Services | Vibrant Healthcare",
  description: "Comprehensive care solutions including repairs, maintenance, and dispatch services.",
};

export default function ProfessionalServicePage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-300">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">Professional Services</h1>
        <p className="text-lg text-textMuted dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need to maintain a state-of-the-art facility. From emergency repairs to scheduled maintenance, our expert technicians have you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Repairs */}
        <Link href="/professional-service/repairs" className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl hover:shadow-lg transition-all group flex flex-col">
          <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-500 flex items-center justify-center mb-6">
            <MdBuild className="text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-on-surface dark:text-white mb-3 group-hover:text-primary transition-colors">Repairs</h2>
          <p className="text-on-surface-variant dark:text-gray-300 mb-6 flex-grow">
            Rapid response emergency repairs for all major diagnostic and imaging equipment to minimize clinical downtime.
          </p>
          <div className="flex items-center text-primary font-medium">
            <span>Learn More</span>
            <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Maintenance */}
        <Link href="/professional-service/maintenance" className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl hover:shadow-lg transition-all group flex flex-col">
          <div className="w-14 h-14 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-500 flex items-center justify-center mb-6">
            <MdAccessTime className="text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-on-surface dark:text-white mb-3 group-hover:text-primary transition-colors">Maintenance</h2>
          <p className="text-on-surface-variant dark:text-gray-300 mb-6 flex-grow">
            Preventative care plans customized for your specific equipment fleet to ensure longevity and compliance.
          </p>
          <div className="flex items-center text-primary font-medium">
            <span>Learn More</span>
            <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Dispatch */}
        <Link href="/professional-service/dispatch" className="glass-card dark:bg-slate-800 dark:border-slate-700 p-8 rounded-2xl hover:shadow-lg transition-all group flex flex-col">
          <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mb-6">
            <MdLocalShipping className="text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-on-surface dark:text-white mb-3 group-hover:text-primary transition-colors">Dispatch</h2>
          <p className="text-on-surface-variant dark:text-gray-300 mb-6 flex-grow">
            24/7 dedicated dispatch team ready to coordinate parts delivery and technician arrival at a moment's notice.
          </p>
          <div className="flex items-center text-primary font-medium">
            <span>Learn More</span>
            <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
      
      {/* Detailed Overview Section */}
      <div className="grid lg:grid-cols-12 gap-12 items-start mt-20 mb-8">
        <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng" 
            alt="Technician working on machine" 
            className="w-full h-auto object-cover aspect-square"
          />
        </div>
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl font-bold text-on-surface dark:text-white border-b border-outline-variant dark:border-slate-700 pb-3">
            Professional Service
          </h2>
          <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-lg">
            As a leading player in the field of medical diagnostic equipment, Vibrant Healthcare delivers 
            comprehensive, cost-effective customer service experience to our clients. We service and repair all 
            major brands and models of <span className="text-primary font-medium">ultrasound diagnostic equipment</span>. 
            Our complete after-sales support ensures that your equipment remains at the highest level of accuracy. 
            We are reachable via phone, e-mail, orally, or by any means. We have varied technical services as listed below:
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0 border border-blue-100 dark:border-slate-700">
                <MdSupportAgent className="text-xl" />
              </div>
              <Link href="/professional-service/immediate-technical-support" className="text-on-surface dark:text-white hover:text-primary font-medium text-lg transition-colors">Immediate Technical Support</Link>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-slate-800 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform flex-shrink-0 border border-red-100 dark:border-slate-700">
                <MdMedicalServices className="text-xl" />
              </div>
              <Link href="/professional-service/emergency-field-service" className="text-on-surface dark:text-white hover:text-primary font-medium text-lg transition-colors">Emergency Field Service</Link>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-slate-800 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform flex-shrink-0 border border-green-100 dark:border-slate-700">
                <MdHeadsetMic className="text-xl" />
              </div>
              <Link href="/professional-service/free-technical-support" className="text-on-surface dark:text-white hover:text-primary font-medium text-lg transition-colors">Free Technical Support</Link>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-slate-800 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform flex-shrink-0 border border-purple-100 dark:border-slate-700">
                <MdSensors className="text-xl" />
              </div>
              <Link href="/professional-service/transducer-support" className="text-on-surface dark:text-white hover:text-primary font-medium text-lg transition-colors">Transducer Support</Link>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-slate-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform flex-shrink-0 border border-orange-100 dark:border-slate-700">
                <MdHandshake className="text-xl" />
              </div>
              <Link href="/professional-service/annual-maintenance-agreement" className="text-on-surface dark:text-white hover:text-primary font-medium text-lg transition-colors">Annual Maintenance Agreement</Link>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-slate-800 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform flex-shrink-0 border border-teal-100 dark:border-slate-700">
                <MdOutlineAutorenew className="text-xl" />
              </div>
              <Link href="/professional-service/refurbish-upgrade" className="text-on-surface dark:text-white hover:text-primary font-medium text-lg transition-colors">Refurbish & Upgrade</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-primary-container dark:bg-slate-800 text-on-primary-container p-8 md:p-12 rounded-3xl mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Our emergency dispatch team is available 24/7. Call us now for priority support.
        </p>
        <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30">
          Contact Support
        </Link>
      </div>
    </div>
  );
}

