"use client"

import { useEffect } from "react"

import { useStoreModal } from "@/hooks/useStoreModal"
import StoreModal from "@/components/modals/StoreModal"

export default function BillBoardPage() {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <main>
      <StoreModal />
    </main>
  )
}
