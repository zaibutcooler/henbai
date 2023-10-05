import { format } from "date-fns"

import prismadb from "@/lib/prismadb"
import { formatter } from "@/lib/utils"

import ProductListing from "./_components/ProductListing"
import { ProductColumn } from "./_components/table/columns"

export default async function ProductPage({
  params,
}: {
  params: { storeID: string }
}) {
  const products = await prismadb.product.findMany({
    where: {
      storeID: params.storeID,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      created: "desc",
    },
  })

  const filteredProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    createdAt: format(item.created, "MMMM do, yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductListing data={filteredProducts} />
      </div>
    </div>
  )
}
