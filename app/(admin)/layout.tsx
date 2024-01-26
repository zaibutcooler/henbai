import React, { ReactNode } from "react"
import { redirect } from "next/navigation"
import { UserButton, auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import AdminNavbar from "@/components/main/admin/AdminNavbar"
import { ModalProvider } from "@/components/modal-provider"

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  })

  return (
    <main>
      <AdminNavbar stores={stores} />
      <ModalProvider />
      {children}
    </main>
  )
}
