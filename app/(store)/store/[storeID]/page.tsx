import prismadb from "@/lib/prismadb"
import Container from "@/components/ui/container"
import BillboardDisplay from "@/components/store/BillboardDisplay"
import ProductList from "@/components/store/ProductList"

export default async function StorePage({
  params,
}: {
  params: { storeID: string }
}) {
  const billboard = await prismadb.billboard.findFirst({
    where: {
      storeID: params.storeID,
    },
  })

  const products = await prismadb.product.findMany({
    where: {
      storeID: params.storeID,
      isFeatured: true,
    },
  })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <BillboardDisplay data={billboard} />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
