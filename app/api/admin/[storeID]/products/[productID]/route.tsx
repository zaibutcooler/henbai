import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export async function DELETE(
  req: Request,
  { params }: { params: { productID: string; storeID: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 })
    }

    if (!params.productID) {
      return new NextResponse("Product id is required", { status: 400 })
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeID,
        userId,
      },
    })

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 })
    }

    const product = await prismadb.product.delete({
      where: {
        id: params.productID,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log("[PRODUCT_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
