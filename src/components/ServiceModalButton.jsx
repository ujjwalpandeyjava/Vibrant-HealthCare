"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function ServiceModalButton({ 
  buttonText = "Request Service", 
  modalTitle = "Request a Service", 
  prefilledMessage = "",
  className = "bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block cursor-pointer"
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {buttonText}
      </button>

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle}
        customMessage={prefilledMessage}
      />
    </>
  );
}
