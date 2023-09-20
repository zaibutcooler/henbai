"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Plus } from "lucide-react"

import { ApiList } from "@/components/ui/api-list"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import AlertModal from "@/components/modals/AlertModal"

const ColorListing = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const onDelete = async () => {}

  const data = []

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
            title={`Colors (${data.length})`}
            description="Manage colors for your products"
          />
          <Button
            onClick={() =>
              router.push(`/admin/${params.storeID}/billboards/new`)
            }
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Separator />
        <ApiList entityName="colors" entityIdName="colorID" />
      </div>
    </>
  )
}

export default ColorListing
