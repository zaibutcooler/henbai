import { create } from "zustand"

interface useStoreModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
