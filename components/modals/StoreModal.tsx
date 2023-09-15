"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { useStoreModal } from "@/hooks/useStoreModal"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Modal } from "@/components/ui/modal"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

const formSchema = z.object({
  name: z.string().min(1),
})

const StoreModal = () => {
  const storeModal = useStoreModal()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    try {
      const response = await axios.post("/api/admin/stores", values)

      console.log("res", response.data)
    } catch (error) {}
  }

  const loading = form.formState.isSubmitting

  return (
    <div>
      <Modal
        title="Create store"
        description="Add a new store to manage products and categories."
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="E-Commerce"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                    <Button
                      disabled={loading}
                      variant="outline"
                      onClick={storeModal.onClose}
                    >
                      Cancel
                    </Button>
                    <Button disabled={loading} type="submit">
                      Continue
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default StoreModal
