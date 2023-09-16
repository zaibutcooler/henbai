import React, { ReactNode } from "react"

import prismadb from "@/lib/prismadb"
import AdminNavbar from "@/components/main/admin/AdminNavbar"
import { ModalProvider } from "@/components/modal-provider"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AdminNavbar />
      <ModalProvider />
      {children}
    </main>
  )
}
