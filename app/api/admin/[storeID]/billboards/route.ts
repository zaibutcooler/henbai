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
    console.log("passed")

    const { imageUrl, label } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    if (!imageUrl || !label) {
      return new NextResponse("imageUrl,label is required", { status: 400 })
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
    const billboard = await prismadb.billboard.create({
      data: {
        imageUrl,
        label,
        storeID: params.storeID,
      },
    })

    return NextResponse.json(billboard)
  } catch (error) {
    console.log("[STORES_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
