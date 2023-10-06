import { CustomProduct } from "@/prisma/types"

import prismadb from "@/lib/prismadb"
import Container from "@/components/ui/container"
import Info from "@/components/store/Info"
import ProductList from "@/components/store/ProductList"
import Gallery from "@/components/store/gallery/Gallery"

export default async function ProductPage({
  params,
}: {
  params: { productID: string }
}) {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productID,
    },
  })

  if (!product) {
    return null
  }

  const suggestedProducts = await prismadb.product.findMany({
    where: {
      categoryID: product.categoryID,
    },
    include: {
      images: true,
    },
  })

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}
