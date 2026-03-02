import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatServiceMetaTitle(template: string, location: string): string {
  return template.replace(/{location}/g, location);
}

export function formatServiceMetaDescription(template: string, location: string): string {
  return template.replace(/{location}/g, location);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}
