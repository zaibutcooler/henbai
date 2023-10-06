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
    const { name, billboardID } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    if (!name || !billboardID) {
      return new NextResponse("name,billboardID is required", {
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
    const newItem = await prismadb.category.create({
      data: {
        name,
        billboardID,
        storeID: params.storeID,
      },
    })

    return NextResponse.json(newItem)
  } catch (error) {
    console.log("[CATEGORY_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeID: string } }
) {
  try {
    if (!params.storeID) {
      return new NextResponse("Store id is required", { status: 400 })
    }

    console.log("passed")
    const items = await prismadb.category.findMany({
      where: {
        storeID: params.storeID,
      },
    })

    return NextResponse.json(items)
  } catch (error) {
    console.log("[CATEGORY_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
