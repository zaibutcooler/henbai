"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const SubAdminNavbar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname()

  const params = useParams()

  const routes = [
    {
      href: `/admin/${params.storeID}`,
      label: "Overview",
      active: pathname === `/${params.storeID}`,
    },
    {
      href: `/admin/${params.storeID}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeID}/billboards`,
    },
    {
      href: `/admin/${params.storeID}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeID}/categories`,
    },
    {
      href: `/admin/${params.storeID}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeID}/sizes`,
    },
    {
      href: `/admin/${params.storeID}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeID}/colors`,
    },
    {
      href: `/admin/${params.storeID}/products`,
      label: "Products",
      active: pathname === `/${params.storeID}/products`,
    },
    {
      href: `/admin/${params.storeID}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeID}/orders`,
    },
    {
      href: `/admin/${params.storeID}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeID}/settings`,
    },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default SubAdminNavbar
