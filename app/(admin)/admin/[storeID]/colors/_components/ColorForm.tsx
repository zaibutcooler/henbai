"use client"

import { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Trash } from "lucide-react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Heading } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import AlertModal from "@/components/modals/AlertModal"

interface Props {
  initialData: any | null
}

const formSchema = z.object({
  name: z.string().min(1),
  value: z.string().min(4).max(9).regex(/^#/, {
    message: "String must be a valid hex code",
  }),
})

const ColorForm: FC<Props> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
    },
  })

  const title = initialData ? "Edit color" : "Create color"
  const description = initialData ? "Edit a color." : "Add a new color"
  const toastMessage = initialData ? "Color updated." : "Color created."
  const action = initialData ? "Save changes" : "Create"

  const onDelete = async () => {}

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values", values)
    try {
      setLoading(true)
      if (initialData) {
        axios.patch(
          `/api/admin/${params.storeID}/colors/${params.colorID}`,
          values
        )
      } else {
        axios.post(`/api/admin/${params.storeID}/colors`, values)
      }
      router.refresh()
      router.push(`/admin/${params.storeID}/colors`)
      toast.success(toastMessage)
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="md:grid md:grid-cols-3 gap-8 mb-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Label</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Label</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-x-4">
                        <Input
                          disabled={loading}
                          placeholder="Color value"
                          {...field}
                        />
                        <div
                          className="border p-4 rounded-full"
                          style={{ backgroundColor: field.value }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>{" "}
            <Button disabled={loading} className="ml-auto" type="submit">
              {action}
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default ColorForm
