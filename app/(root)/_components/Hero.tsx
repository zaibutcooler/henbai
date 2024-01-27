import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Github } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"
import { Separator } from "@/components/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">New components and more.</span>
      <span className="hidden sm:inline">
        New components, cli updates and more.
      </span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}

const Hero = () => {
  return (
    <PageHeader>
      <Announcement />
      <PageHeaderHeading>Build your component library</PageHeaderHeading>
      <PageHeaderDescription>
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </PageHeaderDescription>
      <PageActions>
        <Link href="/docs" className={cn(buttonVariants())}>
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/zaibutcooler/henbai"}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Link>
      </PageActions>
    </PageHeader>
  )
}

export default Hero
