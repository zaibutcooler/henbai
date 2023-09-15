import { redirect } from "next/navigation"
import { UserButton, auth } from "@clerk/nextjs"

import { ThemeToggle } from "@/components/theme-toggle"

import StoreSwitcher from "./StoreSwitcher"
import SubAdminNavbar from "./SubAdminNavbar"

const Navbar = async () => {
  // const { userId } = auth()

  // if (!userId) {
  //   redirect("/sign-in")
  // }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* <StoreSwitcher items={[]} className="" /> */}
        Switcher
        <SubAdminNavbar />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
