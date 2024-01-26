"use client"

import { MouseEventHandler } from "react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { CustomProduct } from "@/prisma/types"
import { Product } from "@prisma/client"
import { Expand, ShoppingCart } from "lucide-react"

import { useCart } from "@/hooks/useCart"
import usePreviewModal from "@/hooks/usePreviewModal"
import Currency from "@/components/ui/currency"
import IconButton from "@/components/ui/icon-button"

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({ data }: { data: any }) => {
  const previewModal = usePreviewModal()
  const cart = useCart()
  const router = useRouter()
  const params = useParams()

  const handleClick = () => {
    router.push(`/store/${params.storeID}/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    cart.addItem(data)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
