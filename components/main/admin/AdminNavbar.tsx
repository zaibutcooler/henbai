import { redirect } from "next/navigation"
import { UserButton, auth } from "@clerk/nextjs"
import { Store } from "@prisma/client"

import prismadb from "@/lib/prismadb"
import { ThemeToggle } from "@/components/theme-toggle"

import StoreSwitcher from "./StoreSwitcher"
import SubAdminNavbar from "./SubAdminNavbar"

export default function Navbar({ stores }: { stores: Store[] }) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="mr-5">
          <StoreSwitcher items={stores} className="" />
        </div>
        <SubAdminNavbar />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}
