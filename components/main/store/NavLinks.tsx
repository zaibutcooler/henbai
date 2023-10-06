"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Category } from "@prisma/client"

import { cn } from "@/lib/utils"

interface Props {
  data: Category[]
}

const Navlinks: React.FC<Props> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/store/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navlinks
