import { NextResponse } from "next/server"
import Stripe from "stripe"

import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"

export async function POST(
  req: Request,
  { params }: { params: { storeID: string } }
) {
  try {
    const { productIDs } = await req.json()
    if (!productIDs || productIDs.length === 0) {
      return new NextResponse("Product ids are required", { status: 400 })
    }

    const products = await prismadb.product.findMany({
      where: {
        id: {
          in: productIDs,
        },
      },
    })

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    products.forEach((product) => {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: product.name,
          },
          unit_amount: product.price.toNumber() * 100,
        },
      })
    })

    const order = await prismadb.order.create({
      data: {
        storeID: params.storeID,
        isPaid: false,
        orderItems: {
          create: productIDs.map((productID: string) => ({
            product: {
              connect: {
                id: productID,
              },
            },
          })),
        },
      },
    })

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      success_url:
        "http://localhost:3000/store/6d192418-bdc2-4076-8883-d31539005421/cart",
      cancel_url: "https://meet.google.com/",
      metadata: {
        orderID: order.id,
      },
    })
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.log("Stripe Error :", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
