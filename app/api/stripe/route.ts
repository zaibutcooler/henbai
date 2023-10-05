import { NextResponse } from "next/server"
import { auth, currentUser } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { getUrl } from "@/lib/utils"

const returnUrl = getUrl("/")

export async function GET() {
  try {
    const { userId } = await auth()
    const user = await currentUser()

    if (!user || !userId) {
      return new NextResponse("Unauthorized", { status: 400 })
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId,
      },
    })

    if (userSubscription && userSubscription.stripeCustomerID) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerID,
        return_url: returnUrl,
      })
      return new NextResponse(JSON.stringify({ url: stripeSession.url }))
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: returnUrl,
      cancel_url: returnUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Henbai",
              description: "Buy or litt you stupid idiot",
            },
            unit_amount: 3000,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: { userId },
    })
    return new NextResponse(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    console.log("Stripe Error :", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
