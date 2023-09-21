import { useParams } from "next/navigation"
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export async function POST(
  req: Request,
  { params }: { params: { storeID: string } }
) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { name, value } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    if (!name || !value) {
      return new NextResponse("name,value is required", {
        status: 400,
      })
    }

    if (!params.storeID) {
      return new NextResponse("Store id is required", { status: 400 })
    }

    const storeByUserID = await prismadb.store.findFirst({
      where: {
        id: params.storeID,
        userId,
      },
    })

    if (!storeByUserID) {
      return new NextResponse("Unauthorized", { status: 405 })
    }
    const newItem = await prismadb.size.create({
      data: {
        name,
        value,
        storeID: params.storeID,
      },
    })

    return NextResponse.json(newItem)
  } catch (error) {
    console.log("[COLORS_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
