"use client"

import { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Category } from "@prisma/client"
import { Plus } from "lucide-react"

import { ApiList } from "@/components/ui/api-list"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import AlertModal from "@/components/modals/AlertModal"

import { CategoryColumn, columns } from "./table/columns"

interface Props {
  data: CategoryColumn[]
}

const CategoryListing: FC<Props> = ({ data }) => {
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
            title={`Categories (${data.length})`}
            description="Manage categories for your store"
          />
          <Button
            onClick={() =>
              router.push(`/admin/${params.storeID}/categories/new`)
            }
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" data={data} columns={columns} />
        <Separator />
        <ApiList entityName="categories" entityIdName="categoryID" />
      </div>
    </>
  )
}

export default CategoryListing
