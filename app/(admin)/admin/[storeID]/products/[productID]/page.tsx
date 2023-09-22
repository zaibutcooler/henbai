import prismadb from "@/lib/prismadb"

import ProductForm from "../_components/ProductForm"

export default async function ProductDetailPage({
  params,
}: {
  params: { productID: string; storeID: string }
}) {
  const colors = await prismadb.color.findMany({
    where: {
      storeID: params.storeID,
    },
  })

  const sizes = await prismadb.size.findMany({
    where: {
      storeID: params.storeID,
    },
  })

  const categories = await prismadb.category.findMany({
    where: {
      storeID: params.storeID,
    },
  })

  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={null}
          colors={colors}
          sizes={sizes}
          categories={categories}
        />
      </div>
    </main>
  )
}
