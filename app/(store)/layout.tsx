import React, { ReactNode } from "react"

import StoreNavbar from "@/components/main/store/StoreNavbar"

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StoreNavbar />
      <div>{children}</div>
    </main>
  )
}
