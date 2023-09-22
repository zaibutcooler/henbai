import prismadb from "@/lib/prismadb"

import ProductListing from "./_components/ProductListing"

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

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductListing data={products} />
      </div>
    </div>
  )
}
