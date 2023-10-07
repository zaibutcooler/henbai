import { format } from "date-fns"

import prismadb from "@/lib/prismadb"
import { formatter } from "@/lib/utils"

import OrderListing from "./_components/OrderListing"
import { OrderColumn } from "./_components/table/columns"

export default async function OrdersPage({
  params,
}: {
  params: { storeID: string }
}) {
  const orders = await prismadb.order.findMany({
    where: {
      storeID: params.storeID,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      created: "desc",
    },
  })

  const filteredOrders = await orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    isPaid: item.isPaid,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price)
      }, 0)
    ),
    created: format(item.created, "MMMM do, yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderListing data={filteredOrders} />
      </div>
    </div>
  )
}
