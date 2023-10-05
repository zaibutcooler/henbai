"use client"

import axios from "axios"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  const handleClick = async () => {
    const response = await axios.get("/api/stripe")
    window.location.href = response.data.url
  }

  return (
    <main>
      <Button onClick={handleClick}>Click</Button>
    </main>
  )
}
