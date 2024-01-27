"use client"

import axios from "axios"

import { Button } from "@/components/ui/button"

import Closing from "./_components/Closing"
import Cta from "./_components/Cta"
import Hero from "./_components/Hero"
import Products from "./_components/Products"

export default function IndexPage() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <Cta />
      <Products />
      <Closing />
    </main>
  )
}
