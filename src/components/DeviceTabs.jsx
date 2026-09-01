"use client";

import { useState } from "react";
import { MdRadioButtonChecked, MdCheckCircle, MdLabelOutline } from "react-icons/md";

export default function DeviceTabs({ baseSpecs, tabs }) {
  const [activeTab, setActiveTab] = useState("techSpec");

  return (
    <div className="pt-8">
      {/* Tab Navigation */}
      <div className="border-b border-outline-variant dark:border-slate-700 flex gap-8 mb-6 overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => setActiveTab("techSpec")}
          className={`pb-4 border-b-2 font-semibold text-sm transition-colors ${
            activeTab === "techSpec"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:text-white"
          }`}
        >
          Technical Specs
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`pb-4 border-b-2 font-semibold text-sm transition-colors ${
            activeTab === "details"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:text-white"
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab("warrantyandSupport")}
          className={`pb-4 border-b-2 font-semibold text-sm transition-colors ${
            activeTab === "warrantyandSupport"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:text-white"
          }`}
        >
          Warranty & Support
        </button>
      </div>

      {/* Tab Content */}
      <div className="glass-card dark:bg-slate-800 dark:border-slate-700 rounded-2xl p-8">
        
        {/* Tech Spec Tab */}
        {activeTab === "techSpec" && (
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Dimensions</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{baseSpecs.dimensions}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Weight</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{baseSpecs.weight}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Power Requirements</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{baseSpecs.powerRequirements}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
              <div>
                <h4 className="text-base font-semibold text-on-surface dark:text-white">Operating Temp.</h4>
                <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{baseSpecs.operatingTemperature}</p>
              </div>
            </div>
            
            {/* Render dynamic tech specs mapped from 'other' */}
            {tabs?.techSpec?.map((spec, idx) => (
              <div key={idx} className="flex gap-4">
                <MdRadioButtonChecked className="text-primary mt-1 text-[24px]" />
                <div>
                  <h4 className="text-base font-semibold text-on-surface dark:text-white">{spec.title}</h4>
                  <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Details Tab */}
        {activeTab === "details" && (
          <div className="space-y-4">
            {tabs?.details?.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {tabs.details.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <MdLabelOutline className="text-secondary mt-1 text-[24px]" />
                    <div>
                      <h4 className="text-base font-semibold text-on-surface dark:text-white">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant dark:text-gray-300 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-on-surface-variant dark:text-gray-400">No additional details available.</p>
            )}
          </div>
        )}

        {/* Warranty & Support Tab */}
        {activeTab === "warrantyandSupport" && (
          <div className="space-y-6">
            {tabs?.warrantyandSupport?.length > 0 ? (
              <div className="flex flex-col gap-6">
                {tabs.warrantyandSupport.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <MdCheckCircle className="text-primary mt-0.5 text-[24px] flex-shrink-0" />
                    <p className="text-base text-on-surface dark:text-white font-medium">{item}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-on-surface-variant dark:text-gray-400">No warranty information available.</p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
