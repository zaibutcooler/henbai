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

    const {
      name,
      price,
      categoryID,
      colorID,
      sizeID,
      images,
      isFeatured,
      isArchived,
    } = body

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 })
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    if (!images || !images.length) {
      return new NextResponse("Images are required", { status: 400 })
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 })
    }

    if (!categoryID) {
      return new NextResponse("Category ID is required", { status: 400 })
    }

    if (!colorID) {
      return new NextResponse("Color ID is required", { status: 400 })
    }

    if (!sizeID) {
      return new NextResponse("Size ID is required", { status: 400 })
    }

    if (!params.storeID) {
      return new NextResponse("Store ID is required", { status: 400 })
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

    const product = await prismadb.product.create({
      data: {
        name,
        price,
        isFeatured,
        isArchived,
        categoryID,
        colorID,
        sizeID,
        storeID: params.storeID,
        images: {
          create: images.map((image: { url: string }) => ({
            url: image.url,
          })),
        },
      },
    })

    console.log("pd", product)

    return NextResponse.json(product)
  } catch (error) {
    console.log("[PRODUCTS_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
