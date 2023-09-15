import React, { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full w-full flex items-center justify-center">
      {children}
    </main>
  )
}
