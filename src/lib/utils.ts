import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind evitando conflictos.
 * Uso: cn("px-4", condition && "text-red-500", "font-bold")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formatea una fecha a string legible en español.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Trunca un texto a maxLength caracteres añadiendo '...' al final.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
