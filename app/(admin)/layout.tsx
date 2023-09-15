import React, { ReactNode } from "react"
import { ModalProvider } from "@/providers/modal-provider"

import prismadb from "@/lib/prismadb"
import AdminNavbar from "@/components/main/admin/AdminNavbar"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AdminNavbar />
      <ModalProvider />
      {children}
    </main>
  )
}
