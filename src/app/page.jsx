import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdMedicalServices, MdBuild, MdAccessTime, MdSettings } from "react-icons/md";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import { getAllDevices } from "@/lib/getDevices";

export default async function LandingPage() {
  const allDevices = await getAllDevices();
  const mostSoldCodes = [1000, 1001, 1004, 1010, 1012, 1015];
  const mostSoldProducts = mostSoldCodes
    .map((code) => allDevices.find((d) => d.code === code))
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-16 pb-16 animate-in fade-in duration-300 overflow-x-clip">
      {/* Featured Banner Carousel */}
      <HomeHeroCarousel />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full py-6 px-4 md:px-8">
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
            <MdCheckCircle className="h-4 w-4" />
            <span>Fast, reliable medical support</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-on-surface dark:text-white">
            Keeping Your Clinic <span className="text-primary">Moving</span>
          </h1>
          <p className="text-textMuted dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            We provide top-tier medical equipment, rapid repair services, and preventive maintenance to ensure your healthcare facility never misses a beat.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/search" className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <span>View Inventory</span>
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <a href="/professional-service" className="bg-white dark:bg-slate-800 text-on-surface dark:text-white border border-gray-300 dark:border-slate-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              Explore Services
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative w-full max-w-lg lg:max-w-none mx-auto mt-6 sm:mt-8 lg:mt-0">
          <div className="relative mr-5 sm:mr-8 lg:mr-10 mt-5 sm:mt-8 lg:mt-10">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-xl relative z-10 aspect-[4/3]">
              <img
                alt="Medical Scene"
                className="rounded-2xl w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgg4LKGbJwySt-yQyn-jN7Qa-6xoo96ICIXnlz3iZBqcF18P5Nlfqu0rTke2xIyB0bnPWnJOIboog6w8KekWPYwtbCR4PNJSgleWF2ODOjTg31ofCuHvwsXiQuZSzV2zgLFT_ainMpSczZbxl_ANkxOMYDNuqlwVK7YM3u4Js7KNcNCDi79AvsJf6qAjRWf_QowEZVgQRbjb9jWB7vEUUxd3abZdepGvpiZBw-AMoKCwLo3Ywb8k4Sng"
              />
            </div>
            <div className="absolute -top-5 -right-5 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-full h-full bg-blue-50 dark:bg-blue-900/30 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-on-surface dark:text-white">Comprehensive Care Solutions</h2>
          <p className="text-textMuted dark:text-gray-400 max-w-2xl mx-auto">Everything you need to maintain a state-of-the-art facility, all in one place.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Equipment Card */}
          <Link href="/search" className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                <MdMedicalServices className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">Equipment</h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-4">Latest medical technology sourced from trusted global manufacturers.</p>
            </div>
            <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Browse</span>
              <FiArrowRight className="h-4 w-4" />
            </div>
          </Link>
          {/* Repair Card */}
          <Link href="/professional-service/repairs" className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="bg-red-50 dark:bg-red-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <MdBuild className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">Repair</h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-4">Rapid response emergency repairs to minimize your clinic's downtime.</p>
            </div>
            <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Request</span>
              <FiArrowRight className="h-4 w-4" />
            </div>
          </Link>
          {/* Maintenance Card */}
          <Link href="/professional-service/maintenance" className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="bg-green-50 dark:bg-green-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-green-500 mb-4">
                <MdAccessTime className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">Maintenance</h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-4">Preventative care plans customized for your specific equipment fleet.</p>
            </div>
            <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Plans</span>
              <FiArrowRight className="h-4 w-4" />
            </div>
          </Link>
          {/* Parts Card */}
          <Link href="/products/spares" className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="bg-purple-50 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-purple-500 mb-4">
                <MdSettings className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-on-surface dark:text-white group-hover:text-primary transition-colors">Parts</h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-4">Extensive inventory of OEM and certified replacement components.</p>
            </div>
            <div className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Search</span>
              <FiArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Top Selling Equipment this month */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-on-surface dark:text-white">Top Selling Equipment this month</h2>
            <p className="text-textMuted dark:text-gray-400">Our most requested high-performance diagnostic systems.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
            <div className="h-48 bg-gray-50 dark:bg-white flex items-center justify-center p-4">
              <img alt="MAGNETOM Vida" className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA60cjCj6J8WH_Q5RNrTtWAyHNYo3fo9Z7qIsugj1OqpP0Q5GBxmLzhCV-R0uKg29x-sl6LI_Y7cX8KlbMPThSIe0fUvrnfCCmqmM9PCft1RrlFdEwPLelV-uOMDFYdH_X_FF3qbVbCxjnwdGty7WLwmT3EscBGhoYD3FgjD6NJLWdQimut0vpwLENt5MNPRYIerLeJansXTGSrkwzHIxQ6xn6x2-f3W59QGgGqepXT9qtTxvBlUEPC-w" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-on-surface dark:text-white">MAGNETOM Vida</h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-6 flex-grow">The first MRI scanner with BioMatrix technology, providing consistent results for every patient.</p>
              <Link href="/devices/magnetom-vida" className="w-full border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center space-x-2">
                <span>View Details</span>
                <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* Item 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
            <div className="h-48 bg-gray-50 dark:bg-white flex items-center justify-center p-4">
              <img alt="Revolution CT" className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI2L2RbbbmqKfxbkHwPNVaCkNHgky_8NSFrfBouY6xhI-H3KPYBPRKTHeU9-WUPhr_PieBIZuEew227oopmgQ84v_3KRcxfzNhW1PIZVLacu06WmLtvGUTaGNj4_u-oVcwngxbJ0eXeOH0kDDOvS01BTVbmZTSOSAaCE5MbpSDVeUq_SiDz4QY2TQdRKvxHliREeolHLla2vEne7EL2O6kAkQSyQvWm8Nd9B2fx43cQh5-u_7xtxk_6Q" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-on-surface dark:text-white">Revolution CT</h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-6 flex-grow">Uncompromised image quality and clinical capabilities across all clinical areas.</p>
              <Link href="/devices/revolution-ct" className="w-full border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center space-x-2">
                <span>View Details</span>
                <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* Item 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
            <div className="h-48 bg-gray-50 dark:bg-white flex items-center justify-center p-4">
              <img alt="Optima XR646" className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1EWoXS3j2_5-wW_hjlHJOu4wld9dwFF3wWtLlfiLVE8F2qHUe9Xhq7IqdTOA75EJw8KnkQVl80ONgfeC3eN439S-okNnmTSg0v9MzB6wOtlfE8-xhN1HLUmUB9plZuWuupwk6NoWYaseDPe85or4NOabmdp-TWWcsSJgOcO0jzOG1oboCMbn57YyILZuag5GFfgCfrAU7riyX1ZEPsthRY6d2_wUEhCPnOV-I198nN0YgF_g4DDUgww" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-on-surface dark:text-white">Optima XR646</h3>
              <p className="text-textMuted dark:text-gray-400 text-sm mb-6 flex-grow">A digital radiographic system designed to help you improve productivity and patient care.</p>
              <Link href="/devices/optima-xr646" className="w-full border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center space-x-2">
                <span>View Details</span>
                <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
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
          {/* Inventory Item 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
            <div className="bg-gray-50 dark:bg-white rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-2 right-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs px-2 py-1 rounded font-semibold z-10">New</span>
              <img alt="Apex V4 Monitor" className="object-contain h-full p-2 mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBDf5Z1GGLUeJviCgCjGZr-2oePbd75O9twv8nK3hwB8Uh4KaZ0VGuqMY6etZrXUapO-b1wD-xttjIIEfchSB9XU2qX6njszhNKOngAmtOJxIeCEcy62LcVjogwt6MtNW5LGMl1Zql4XxwYiDP__mv5Q3ssVqG9dJB2_sIyer1Z6zZAgTelNgLLRoYwLBBrawpgrUxjsI5daBybBuv2fktWp_zy8orZCMzWh8oaxsHKgaNpugF0aCWw" />
            </div>
            <p className="text-xs text-textMuted dark:text-gray-400 font-semibold tracking-wider uppercase mb-1">Cardiology</p>
            <h3 className="font-bold text-sm mb-2 text-on-surface dark:text-white">Apex V4 Monitor</h3>
            <p className="text-textMuted dark:text-gray-400 text-xs mb-4 line-clamp-2">Advanced continuous monitoring system with wireless telemetry capabilities.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-medium text-on-surface dark:text-white">In Stock</span>
              <button className="bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-100">Add to Quote</button>
            </div>
          </div>
          {/* Inventory Item 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
            <div className="bg-gray-50 dark:bg-white rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
              <img alt="Sonar Pro Probe" className="object-contain h-full p-2 mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7C0H1EBrANODKoLWHEivt8dZmaAEQQWyKGNYlKa8cTHuK3Yaq2j6KCZz6LandingPageq2j6KCZz6UcQs82pS6sgaINx1CszoA5Z70hqm6J4yM8hsfOfiF50Ow8sCjc7K9fSQcYatQ5UFQu1Xrissrb7U327VFfoFKs3sbYqqKRBIyZlqPrSzmmDtKr7G7QJpw-f9VpZ_82lwueR1hadSQPb2BD8JFBB3iAbsU3lI533STRrZYnPIfvGsamdPugnBj2oIFltadg" />
            </div>
            <p className="text-xs text-textMuted dark:text-gray-400 font-semibold tracking-wider uppercase mb-1">Imaging</p>
            <h3 className="font-bold text-sm mb-2 text-on-surface dark:text-white">Sonar Pro Probe</h3>
            <p className="text-textMuted dark:text-gray-400 text-xs mb-4 line-clamp-2">High-frequency linear array transducer for detailed superficial imaging.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-medium text-on-surface dark:text-white">2 Available</span>
              <button className="bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-100">Add to Quote</button>
            </div>
          </div>
          {/* Inventory Item 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
            <div className="bg-gray-50 dark:bg-white rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-2 right-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs px-2 py-1 rounded font-semibold z-10">New</span>
              <img alt="LifeStart AED" className="object-contain h-full p-2 mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWx4rtKz42p85xFw1WiUudfJdnqVvBXJQsyWBvDkjTp3WEdof5vd_vtcyZg31kRBpjCx6pJat6uuQReGFtnRQ2vz6e-wEyFPaZwA16FT2ohq3vR5jWy2RIE6SCkTMpgP5RrNfjiCYvncH5AL1OfRzG9JBQoWn7PyNfTHMUX3ysoMXpf8TmOSObj27MzKZzMo2meqIyZtkrC-edgluQ0SwqVQM3kAhSuX3vQBKxtFkkomcN3Ii5m9Di9g" />
            </div>
            <p className="text-xs text-textMuted dark:text-gray-400 font-semibold tracking-wider uppercase mb-1">Emergency</p>
            <h3 className="font-bold text-sm mb-2 text-on-surface dark:text-white">LifeStart AED</h3>
            <p className="text-textMuted dark:text-gray-400 text-xs mb-4 line-clamp-2">Fully automatic external defibrillator with long-life battery and diagnostic monitoring.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-medium text-on-surface dark:text-white">In Stock</span>
              <button className="bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-100">Add to Quote</button>
            </div>
          </div>
          {/* Inventory Item 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 opacity-50 flex flex-col">
            <div className="bg-gray-50 dark:bg-white rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
              <img alt="Lumina OR Light" className="object-contain h-full p-2 mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjCcTyHj9HDYHqCG-GgxPC4odLTuKjT6-uKJlBAVgFNeqQeJDUn9gRFFrruCCpbDBTACQb9sa6h5dlXllrWYl8suoULtUEZ78HdKHdFMdzYrS4na51uZX43Q6X5JxO6vx_n3xBUV-xht_7LESJpFvlzbG_Tsh0jpIyrS-iybIuZncTk1npH0s2X_4jSIvoJMHB6fQFPGJLcDo0h4QtpTIiVIlt0FqQOEsqyWDaN_GH-UgWMCTGY6Afdg" />
            </div>
            <p className="text-xs text-textMuted dark:text-gray-400 font-semibold tracking-wider uppercase mb-1">Surgical</p>
            <h3 className="font-bold text-sm mb-2 text-on-surface dark:text-white">Lumina OR Light</h3>
            <p className="text-textMuted dark:text-gray-400 text-xs mb-4 line-clamp-2">Ceiling-mounted surgical light with shadow-reduction.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-medium text-gray-400">Call for availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* Most Sold Products */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              <span>Best Sellers</span>
            </div>
            <h2 className="text-3xl font-extrabold text-on-surface dark:text-white">Most Sold Products</h2>
            <p className="text-textMuted dark:text-gray-400 text-sm mt-1">Our highest volume systems & transducers trusted by leading medical centers.</p>
          </div>
          <Link href="/products/machine" className="text-primary font-bold text-sm flex items-center space-x-1 hover:underline shrink-0">
            <span>Explore All Products</span>
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mostSoldProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="bg-gray-50 dark:bg-slate-800/60 p-4 h-48 relative flex items-center justify-center border-b border-gray-100 dark:border-slate-800">
                  <Image
                    src={product.images?.[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm border border-slate-700">
                    Code: #{product.code}
                  </span>
                  {product.tier && (
                    <span className="absolute top-3 left-3 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-300 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                      {product.tier}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 mb-1 block">
                    {product.manufacturer} • {product.category}
                  </span>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/products/${product.id}`}
                  className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <FiChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
