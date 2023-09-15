import { UserButton } from "@clerk/nextjs"

import { ThemeToggle } from "@/components/theme-toggle"

import StoreSwitcher from "./StoreSwitcher"
import SubAdminNavbar from "./SubAdminNavbar"

const AdminNavbar = () => {
  return (
    <div className="border-b">
      <nav className="flex h-16 items-center px-4">
        <section>
          <StoreSwitcher items={[]} className="" />
        </section>
        <section>
          <SubAdminNavbar className="mx-auto" />
        </section>
        <section className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </section>
      </nav>
    </div>
  )
}

export default AdminNavbar
