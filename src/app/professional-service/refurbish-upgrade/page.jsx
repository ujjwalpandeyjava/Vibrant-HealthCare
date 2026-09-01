import Link from "next/link";
import { MdOutlineAutorenew } from "react-icons/md";

export default function RefurbishUpgradePage() {
  return (

      <div className="max-w-container-max mx-auto px-4 md:px-8 py-12">
        <div className="mb-10">
          <Link href="/professional-service" className="text-primary hover:underline text-sm font-medium">
            &larr; Back to Professional Services
          </Link>
        </div>
        
        <div className="max-w-4xl space-y-4 mb-12">
          <p className="text-lg text-textMuted dark:text-gray-400 leading-relaxed">
            We have a detailed refurbish & upgrade process that is followed threadbare for <span className="text-primary font-medium">pre-owned ultrasound systems</span> which helps us provide equipment in excellent condition.
          </p>
        </div>

      <div className="space-y-10 max-w-4xl relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant before:to-transparent">
        
        {/* Step 1 */}
        <div className="relative flex items-start md:justify-between">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container shadow-sm transform -translate-x-1/2 mt-1.5"></div>
          <div className="ml-10 md:ml-0 md:w-5/12 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-2">Receiving and testing</h3>
            <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-sm">
              Makes sure that transducers and systems are disinfected followed by diagnostics, all modes are tested and all mechanical operations are verified. Patient data is removed from the hard drive.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-start md:justify-between md:flex-row-reverse">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container shadow-sm transform -translate-x-1/2 mt-1.5"></div>
          <div className="ml-10 md:ml-0 md:w-5/12 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-2">Refurbish first level</h3>
            <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-sm">
              This level includes a second diagnostic run followed by field Modification Instruction (FMI) status check (installation if necessary). All modes are tested for functionality and all mechanical operations are verified and software is reloaded.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex items-start md:justify-between">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container shadow-sm transform -translate-x-1/2 mt-1.5"></div>
          <div className="ml-10 md:ml-0 md:w-5/12 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-2">Refurbish Second level</h3>
            <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-sm">
              Components are separated and completely cleaned. Parts are repainted in a sophisticated computer-matching paint booth. Any remaining failures are checked and repaired.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex items-start md:justify-between md:flex-row-reverse">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container shadow-sm transform -translate-x-1/2 mt-1.5"></div>
          <div className="ml-10 md:ml-0 md:w-5/12 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-2">Refurbish third level</h3>
            <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-sm">
              Equipment is reassembled and the electrical system is tested. Peripherals and hardware options are installed.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative flex items-start md:justify-between">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container shadow-sm transform -translate-x-1/2 mt-1.5"></div>
          <div className="ml-10 md:ml-0 md:w-5/12 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-2">Final Test</h3>
            <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-sm">
              Finally full functional diagnostics testing is conducted. Insite* is configured, if applicable.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="relative flex items-start md:justify-between md:flex-row-reverse">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container shadow-sm transform -translate-x-1/2 mt-1.5"></div>
          <div className="ml-10 md:ml-0 md:w-5/12 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-2">Reloading</h3>
            <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-sm">
              System is configured specifically to your order. Probes are added. eDHR (electronic Device History Record) documents are loaded and verified.
            </p>
          </div>
        </div>

        {/* Step 7 */}
        <div className="relative flex items-start md:justify-between">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container shadow-sm transform -translate-x-1/2 mt-1.5"></div>
          <div className="ml-10 md:ml-0 md:w-5/12 glass-card dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-2">Final Verification and review</h3>
            <p className="text-on-surface-variant dark:text-gray-300 leading-relaxed text-sm">
              QA technician conducts QA review. Independent team conducts DHR review.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

