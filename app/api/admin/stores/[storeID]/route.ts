import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export async function PATCH(
  req: Request,
  { params }: { params: { storeID: string } }
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { name } = body

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 })
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    if (!params.storeID) {
      return new NextResponse("Store id is required", { status: 400 })
    }

    const store = await prismadb.store.updateMany({
      where: {
        id: params.storeID,
        userId,
      },
      data: {
        name,
      },
    })

    return NextResponse.json(store)
  } catch (error) {
    console.log("[STORE_PATCH]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeID: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!params.storeID) {
      return new NextResponse("Require Store ID", { status: 401 })
    }

    const store = await prismadb.store.deleteMany({
      where: {
        userId,
        id: params.storeID,
      },
    })

    return NextResponse.json(store)
  } catch (error) {
    console.log("[STORES_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
