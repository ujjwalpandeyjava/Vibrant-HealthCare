"use client";

import QuoteModal from "@/components/QuoteModal";
import { useState } from "react";
import { MdRequestQuote } from "react-icons/md";

export default function ProductActions({ device }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // The prefilled message the user requested
  const customMessage = `I want to buy the ${device.name}. What are the details and by when can I get it?`;

  return (
    <>
      <div className="flex flex-col gap-4">
        <button onClick={() => setIsQuoteOpen(true)} className="w-full py-3 bg-primary-container dark:bg-slate-700 text-on-primary rounded-full hover:bg-primary transition-colors font-semibold flex items-center justify-center gap-2 shadow-sm"> <MdRequestQuote className="text-sm" /> Request Quote</button>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        product={device}
        customMessage={customMessage}
      />
    </>
  );
}
