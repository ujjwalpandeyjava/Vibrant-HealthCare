import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format camelCase or snake_case key strings into human readable Title Case labels.
 * e.g., 'firmwareVersion' -> 'Firmware Version'
 */
export function formatKeyToTitle(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}
