"use client"

import { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Color } from "@prisma/client"
import { Plus } from "lucide-react"

import { ApiList } from "@/components/ui/api-list"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import AlertModal from "@/components/modals/AlertModal"

import { ColorColumn, columns } from "./table/columns"

interface Props {
  data: ColorColumn[]
}

const ColorListing: FC<Props> = ({ data }) => {
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
            title={`Colors (${data.length})`}
            description="Manage colors for your products"
          />
          <Button
            onClick={() => router.push(`/admin/${params.storeID}/colors/new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" data={data} columns={columns} />
        <Separator />
        <ApiList entityName="colors" entityIdName="colorID" />
      </div>
    </>
  )
}

export default ColorListing
