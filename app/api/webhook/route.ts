import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"

import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string
  let event: Stripe.Event
  console.log("starting")

  try {
    console.log("reached")
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.WEBHOOK_SECRET!
    )
    console.log("passed")
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  //@ts-ignore
  const session = event.data.object as Stripe.Checkout.Session
  const address = session.customer_details?.address

  const addressComponents = [
    address?.line1,
    address?.line2,
    address?.state,
    address?.city,
    address?.postal_code,
    address?.country,
  ]

  const addressString = addressComponents
    .filter((item) => item !== null)
    .join(", ")

  console.log("as", addressString)

  if (event.type === "checkout.session.completed") {
    const order = await prisma?.order.update({
      where: { id: session?.metadata?.orderID },
      data: {
        isPaid: true,
        address: addressString,
        phone: session.customer_details?.phone || "",
      },
      include: {
        orderItems: true,
      },
    })

    const productIDs = order?.orderItems.map((item) => item.productID)
    await prismadb.product.updateMany({
      where: {
        id: {
          in: productIDs,
        },
      },
      data: {
        isArchived: true,
      },
    })
  }
  return new NextResponse(null, { status: 200 })
}
