"use client";

import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

export default function Breadcrumb({ category, name }) {
  const breadcrumbItems = [
    { label: "Equipment", href: "/search" }, // first node
    ...(category ? [{ label: category, href: `/search?category=${encodeURIComponent(category)}` }] : []), // mid node
    ...(name ? [{ label: name, href: null }] : []), // last node
  ];

  return (
    <nav aria-label="Breadcrumb" className="flex text-sm text-on-surface-variant dark:text-gray-300">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li
              key={index}
              className="inline-flex items-center"
              aria-current={isLast ? "page" : undefined}
            >
              {index > 0 && <MdChevronRight className="text-sm mx-1 text-outline dark:text-gray-400 shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-[250px] md:max-w-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-on-surface dark:text-white font-medium truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
