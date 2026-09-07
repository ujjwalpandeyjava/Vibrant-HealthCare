import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const topEquipment = [
  {
    title: "MAGNETOM Vida",
    description: "The first MRI scanner with BioMatrix technology, providing consistent results for every patient.",
    link: "/devices/magnetom-vida",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA60cjCj6J8WH_Q5RNrTtWAyHNYo3fo9Z7qIsugj1OqpP0Q5GBxmLzhCV-R0uKg29x-sl6LI_Y7cX8KlbMPThSIe0fUvrnfCCmqmM9PCft1RrlFdEwPLelV-uOMDFYdH_X_FF3qbVbCxjnwdGty7WLwmT3EscBGhoYD3FgjD6NJLWdQimut0vpwLENt5MNPRYIerLeJansXTGSrkwzHIxQ6xn6x2-f3W59QGgGqepXT9qtTxvBlUEPC-w",
  },
  {
    title: "Revolution CT",
    description: "Uncompromised image quality and clinical capabilities across all clinical areas.",
    link: "/devices/revolution-ct",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI2L2RbbbmqKfxbkHwPNVaCkNHgky_8NSFrfBouY6xhI-H3KPYBPRKTHeU9-WUPhr_PieBIZuEew227oopmgQ84v_3KRcxfzNhW1PIZVLacu06WmLtvGUTaGNj4_u-oVcwngxbJ0eXeOH0kDDOvS01BTVbmZTSOSAaCE5MbpSDVeUq_SiDz4QY2TQdRKvxHliREeolHLla2vEne7EL2O6kAkQSyQvWm8Nd9B2fx43cQh5-u_7xtxk_6Q",
  },
  {
    title: "Optima XR646",
    description: "A digital radiographic system designed to help you improve productivity and patient care.",
    link: "/devices/optima-xr646",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1EWoXS3j2_5-wW_hjlHJOu4wld9dwFF3wWtLlfiLVE8F2qHUe9Xhq7IqdTOA75EJw8KnkQVl80ONgfeC3eN439S-okNnmTSg0v9MzB6wOtlfE8-xhN1HLUmUB9plZuWuupwk6NoWYaseDPe85or4NOabmdp-TWWcsSJgOcO0jzOG1oboCMbn57YyILZuag5GFfgCfrAU7riyX1ZEPsthRY6d2_wUEhCPnOV-I198nN0YgF_g4DDUgww",
  },
];

export default function TopSellingEquipment() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-on-surface dark:text-white">
            Top Selling Equipment this month
          </h2>
          <p className="text-textMuted dark:text-gray-400">
            Our most requested high-performance diagnostic systems.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topEquipment.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col"
          >
            <div className="relative h-48 bg-gray-50 dark:bg-white flex items-center justify-center p-4">
              <Image
                alt={item.title}
                src={item.image}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-4 mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-on-surface dark:text-white">
                {item.title}
              </h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-6 flex-grow">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="w-full border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
