"use client"

import { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Size } from "@prisma/client"
import { Plus } from "lucide-react"

import { ApiList } from "@/components/ui/api-list"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import AlertModal from "@/components/modals/AlertModal"

interface Props {
  data: Size[]
}

const SizeListing: FC<Props> = ({ data }) => {
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
            title={`Sizes (${data.length})`}
            description="Manage sizes for your products"
          />
          <Button
            onClick={() => router.push(`/admin/${params.storeID}/sizes/new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Separator />
        <ApiList entityName="sizes" entityIdName="sizeID" />
      </div>
    </>
  )
}

export default SizeListing
