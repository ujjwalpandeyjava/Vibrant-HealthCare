"use client";

const DEFAULT_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng";

export default function ProfessionalServiceBanner({ 
  bannerText = "PROFESSIONAL SERVICES", 
  bannerImage = DEFAULT_IMAGE 
}) {
  return (
    <div className="relative w-full h-48 md:h-72 overflow-hidden bg-gray-900 dark:bg-slate-950 border-b-4 border-primary">
      <img 
        src={bannerImage} 
        alt={bannerText} 
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 w-full h-full">
        {/* Angled blue overlay */}
        <div className="absolute top-0 right-0 h-full w-[75%] md:w-[60%] bg-[#1176b6] shadow-2xl" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <div className="absolute inset-0 flex items-center justify-center pl-8 md:pl-16 pr-4 text-center">
            <h1 className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <span className="hidden md:block w-4 md:w-8 h-px bg-white/70"></span>
              {bannerText}
              <span className="hidden md:block w-4 md:w-8 h-px bg-white/70"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
