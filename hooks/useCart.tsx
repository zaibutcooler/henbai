import { CustomProduct } from "@/prisma/types"
import { Product } from "@prisma/client"
import toast from "react-hot-toast"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface CartStore {
  items: CustomProduct[]
  addItem: (data: CustomProduct) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CustomProduct) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)
        if (existingItem) {
          return toast("Item already in cart.")
        }

        set({ items: [...get().items, data] })
        toast.success("Item added to cart")
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast.success("Item removed from cart")
      },
      removeAll: () => set({ items: [] }),
    }),
    { name: "cartStorage", storage: createJSONStorage(() => localStorage) }
  )
)
