import { FC } from "react"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

import SettingForm from "./_components/SettingForm"

interface PageProps {
  params: {
    storeID: string
  }
}

export default async function SettingPage({ params }: PageProps) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeID,
      userId,
    },
  })

  if (!store) {
    redirect("/")
  }

  return (
    <main>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SettingForm initialData={store} />
        </div>
      </div>
    </main>
  )
}
