import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const inventory = [
  {
    category: "Cardiology",
    title: "Apex V4 Monitor",
    description: "Advanced continuous monitoring system with wireless telemetry capabilities.",
    badge: "New",
    availability: "In Stock",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOBDf5Z1GGLUeJviCgCjGZr-2oePbd75O9twv8nK3hwB8Uh4KaZ0VGuqMY6etZrXUapO-b1wD-xttjIIEfchSB9XU2qX6njszhNKOngAmtOJxIeCEcy62LcVjogwt6MtNW5LGMl1Zql4XxwYiDP__mv5Q3ssVqG9dJB2_sIyer1Z6zZAgTelNgLLRoYwLBBrawpgrUxjsI5daBybBuv2fktWp_zy8orZCMzWh8oaxsHKgaNpugF0aCWw",
    canQuote: true,
  },
  {
    category: "Imaging",
    title: "Sonar Pro Probe",
    description: "High-frequency linear array transducer for detailed superficial imaging.",
    availability: "2 Available",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7C0H1EBrANODKoLWHEivt8dZmaAEQQWyKGNYlKa8cTHuK3Yaq2j6KCZz6LandingPageq2j6KCZz6UcQs82pS6sgaINx1CszoA5Z70hqm6J4yM8hsfOfiF50Ow8sCjc7K9fSQcYatQ5UFQu1Xrissrb7U327VFfoFKs3sbYqqKRBIyZlqPrSzmmDtKr7G7QJpw-f9VpZ_82lwueR1hadSQPb2BD8JFBB3iAbsU3lI533STRrZYnPIfvGsamdPugnBj2oIFltadg",
    canQuote: true,
  },
  {
    category: "Emergency",
    title: "LifeStart AED",
    description: "Fully automatic external defibrillator with long-life battery and diagnostic monitoring.",
    badge: "New",
    availability: "In Stock",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWx4rtKz42p85xFw1WiUudfJdnqVvBXJQsyWBvDkjTp3WEdof5vd_vtcyZg31kRBpjCx6pJat6uuQReGFtnRQ2vz6e-wEyFPaZwA16FT2ohq3vR5jWy2RIE6SCkTMpgP5RrNfjiCYvncH5AL1OfRzG9JBQoWn7PyNfTHMUX3ysoMXpf8TmOSObj27MzKZzMo2meqIyZtkrC-edgluQ0SwqVQM3kAhSuX3vQBKxtFkkomcN3Ii5m9Di9g",
    canQuote: true,
  },
  {
    category: "Surgical",
    title: "Lumina OR Light",
    description: "Ceiling-mounted surgical light with shadow-reduction.",
    availability: "Call for availability",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjCcTyHj9HDYHqCG-GgxPC4odLTuKjT6-uKJlBAVgFNeqQeJDUn9gRFFrruCCpbDBTACQb9sa6h5dlXllrWYl8suoULtUEZ78HdKHdFMdzYrS4na51uZX43Q6X5JxO6vx_n3xBUV-xht_7LESJpFvlzbG_Tsh0jpIyrS-iybIuZncTk1npH0s2X_4jSIvoJMHB6fQFPGJLcDo0h4QtpTIiVIlt0FqQOEsqyWDaN_GH-UgWMCTGY6Afdg",
    canQuote: false,
    opacity: "opacity-50",
  },
];

export default function FeaturedInventory() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-on-surface dark:text-white">Featured Inventory</h2>
          <p className="text-textMuted dark:text-gray-400">Ready to ship, tested and certified.</p>
        </div>
        <Link href="/search" className="text-primary font-medium text-sm flex items-center space-x-1 hover:underline">
          <span>View All</span>
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventory.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col ${item.opacity || ""}`}
          >
            <div className="bg-gray-50 dark:bg-white rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
              {item.badge && (
                <span className="absolute top-2 right-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs px-2 py-1 rounded font-semibold z-10">
                  {item.badge}
                </span>
              )}
              <Image
                alt={item.title}
                src={item.image}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-2 mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
            <p className="text-xs text-textMuted dark:text-gray-400 font-semibold tracking-wider uppercase mb-1">
              {item.category}
            </p>
            <h3 className="font-bold text-sm mb-2 text-on-surface dark:text-white">{item.title}</h3>
            <p className="text-textMuted dark:text-gray-400 text-xs mb-4 line-clamp-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className={`text-sm font-medium ${item.canQuote ? "text-on-surface dark:text-white" : "text-gray-400"}`}>
                {item.availability}
              </span>
              {item.canQuote && (
                <Link
                  href={`/search?q=${encodeURIComponent(item.title)}`}
                  className="bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  Add to Quote
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
