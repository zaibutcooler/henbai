import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("bd", body)
  } catch (error) {
    console.log("Stripe Error :", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
