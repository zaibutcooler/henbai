"use client"

import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { OrderColumn, columns } from "./table/columns"

interface OrderListingProps {
  data: OrderColumn[]
}

const OrderListing: React.FC<OrderListingProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable data={data} columns={columns} searchKey="products" />
    </>
  )
}

export default OrderListing
