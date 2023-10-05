import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(input: string) {
  return `${process.env.WEBSITE_URL}${input}`
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})
