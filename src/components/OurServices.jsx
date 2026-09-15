import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Accessories",
    link: "/products/accessories",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOBDf5Z1GGLUeJviCgCjGZr-2oePbd75O9twv8nK3hwB8Uh4KaZ0VGuqMY6etZrXUapO-b1wD-xttjIIEfchSB9XU2qX6njszhNKOngAmtOJxIeCEcy62LcVjogwt6MtNW5LGMl1Zql4XxwYiDP__mv5Q3ssVqG9dJB2_sIyer1Z6zZAgTelNgLLRoYwLBBrawpgrUxjsI5daBybBuv2fktWp_zy8orZCMzWh8oaxsHKgaNpugF0aCWw",
    alt: "Medical Accessories",
  },
  {
    title: "Ultrasound Machine",
    link: "/products/machine",
    image: "/images/banners/ultrasound-machine.jpg",
    alt: "Ultrasound Systems",
  },
  {
    title: "Professional Service",
    link: "/professional-service",
    image: "/images/doctors_performing_operation.jpg",
    alt: "Biomedical Equipment Service",
  },
  {
    title: "Spares",
    link: "/products/spares",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI2L2RbbbmqKfxbkHwPNVaCkNHgky_8NSFrfBouY6xhI-H3KPYBPRKTHeU9-WUPhr_PieBIZuEew227oopmgQ84v_3KRcxfzNhW1PIZVLacu06WmLtvGUTaGNj4_u-oVcwngxbJ0eXeOH0kDDOvS01BTVbmZTSOSAaCE5MbpSDVeUq_SiDz4QY2TQdRKvxHliREeolHLla2vEne7EL2O6kAkQSyQvWm8Nd9B2fx43cQh5-u_7xtxk_6Q",
    alt: "OEM Spare Components",
  },
  {
    title: "Transducer",
    link: "/products/transducer",
    image: "/images/banners/ultrasound-transducer.jpg",
    alt: "Ultrasound Probes & Transducers",
  },
];

export default function OurServices() {
  return (
    <section className="bg-slate-100 dark:bg-slate-800/60 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Our Services
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-2.5 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {services.map((srv, idx) => (
          <Link
            key={idx}
            href={srv.link}
            className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-200 dark:border-slate-700 transition-all"
          >
            {/* Image Preview Container */}
            <div className="relative h-36 sm:h-40 bg-white p-3 flex items-center justify-center overflow-hidden border-b border-gray-100 dark:border-slate-800">
              <Image
                src={srv.image}
                alt={srv.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-contain p-2 mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 bg-[#3f3f46] group-hover:bg-slate-900 dark:group-hover:bg-primary py-3.5 px-2 flex items-center justify-center text-center text-white font-bold text-sm sm:text-base tracking-wide transition-colors">
              {srv.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
