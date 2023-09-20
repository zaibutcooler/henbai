"use client"

import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

interface OrderListingProps {
  data: any
}

const OrderListing: React.FC<OrderListingProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data})`}
        description="Manage orders for your store"
      />
      <Separator />
      //Data Table
    </>
  )
}

export default OrderListing
