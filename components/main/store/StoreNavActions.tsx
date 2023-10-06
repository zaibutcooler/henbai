"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ShoppingBag } from "lucide-react"

import { useCart } from "@/hooks/useCart"
import { Button } from "@/components/ui/button"

const StoreNavActions = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const params = useParams()

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push(`/store/${params.storeID}/cart`)}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default StoreNavActions
