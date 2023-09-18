"use client"

import { useEffect } from "react"

import { useStoreModal } from "@/hooks/useStoreModal"
import StoreModal from "@/components/modals/StoreModal"

import BillboardListing from "./_components/BillboardListing"

export default function BillBoardPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardListing />
      </div>
    </div>
  )
}
