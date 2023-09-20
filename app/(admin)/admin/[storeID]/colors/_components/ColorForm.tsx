"use client"

import { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import AlertModal from "@/components/modals/AlertModal"

interface Props {
  initialData: any | null
}

const ColorForm: FC<Props> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? "Edit color" : "Create color"
  const description = initialData ? "Edit a color." : "Add a new color"
  const toastMessage = initialData ? "Color updated." : "Color created."
  const action = initialData ? "Save changes" : "Create"

  const onDelete = async () => {}

  return (
    <>
      {" "}
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Heading title={title} description={description} />
          {initialData && (
            <Button
              disabled={loading}
              variant="destructive"
              size="sm"
              onClick={() => setOpen(true)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Separator />
      </div>
    </>
  )
}

export default ColorForm
