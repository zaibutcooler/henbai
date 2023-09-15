import React, { ReactNode } from "react"

import AdminNavbar from "@/components/main/admin/AdminNavbar"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AdminNavbar />
      {children}
    </main>
  )
}
