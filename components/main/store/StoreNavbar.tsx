"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Category } from "@prisma/client"

import { getCategoriesForNav } from "@/lib/actions"
import Container from "@/components/ui/container"

import Navlinks from "./NavLinks"
import StoreNavActions from "./StoreNavActions"

const Navbar = () => {
  const params = useParams()
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fillDatas = async () => {
      const links = await getCategoriesForNav(params.storeID)
      setCategories(links)
    }
    fillDatas()
  }, [])

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <Navlinks data={categories} />

          <StoreNavActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
