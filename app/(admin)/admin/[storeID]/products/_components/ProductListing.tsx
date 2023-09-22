"use client"

import { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Product } from "@prisma/client"
import { Plus } from "lucide-react"

import { ApiList } from "@/components/ui/api-list"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import AlertModal from "@/components/modals/AlertModal"

interface Props {
  data: Product[]
}

const ProductListing: FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const onDelete = async () => {}

  const params = useParams()
  const router = useRouter()

  return (
    <>
      {" "}
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className=" space-y-4">
        {" "}
        <div className="flex items-center justify-between">
          <Heading
            title={`Products (${data.length})`}
            description="Manage products for your store"
          />
          <Button
            onClick={() => router.push(`/admin/${params.storeID}/products/new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Separator />
        //Data Table
        <Separator />
        <ApiList entityName="products" entityIdName="productID" />
      </div>
    </>
  )
}

export default ProductListing
