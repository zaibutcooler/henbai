import { NextResponse } from "next/server"


export async function GET(
    req: Request,
    { params }: { params: { storeID: string } }
  ) {
    try {
      return NextResponse.json({})
    } catch (error) {
      console.log("[CATEGORY_POST]", error)
      return new NextResponse("Internal error", { status: 500 })
    }
  }
  