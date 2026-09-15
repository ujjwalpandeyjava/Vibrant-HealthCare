import Link from "next/link";

export default function ServiceCtaBanner({
  heading = "Need Immediate Assistance?",
  content = "Our emergency dispatch team is available 24/7. Call us now for priority support.",
  buttonText = "Contact Support",
  buttonLink = "/contact",
  className = "",
}) {
  return (
    <div className={`bg-primary-container dark:bg-slate-800 text-on-primary-container p-8 md:p-12 rounded-3xl mt-16 text-center ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
      <p className="mb-8 max-w-xl mx-auto">{content}</p>
      <Link
        href={buttonLink}
        className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30"
      >
        {buttonText}
      </Link>
    </div>
  );
}
