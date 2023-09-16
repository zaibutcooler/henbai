"use client"

import { FC, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Trash } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
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
  initialData: any
}

const formSchema = z.object({ name: z.string().min(1) })

type FormType = z.infer<typeof formSchema>

const SettingForm: FC<Props> = ({ initialData }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  })

  const params = useParams()
  const router = useRouter()

  const onSubmit = async (values: FormType) => {
    try {
      setLoading(true)
      await axios.patch(`/api/admin/stores/${params.storeID}`, values)
      router.refresh()
      toast.success("Store updated.")
    } catch (error: any) {
      toast.error("Something went wrong.")
      console.log("err", error)
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/admin/stores/${params.storeID}`)
      router.refresh()
      router.push("/")
      toast.success("Store deleted.")
    } catch (error: any) {
      toast.error("Make sure you removed all products and categories first.")
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Heading title="Store settings" description="Manage store setting" />
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="grid grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Store name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={loading} className="ml-auto" type="submit">
              Save changes
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default SettingForm
