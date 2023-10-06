import { Product } from "@prisma/client"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface CartStore {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: (id: string) => void
}

export const useCart = {}
