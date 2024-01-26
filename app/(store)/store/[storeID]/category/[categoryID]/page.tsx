import prismadb from "@/lib/prismadb"
import Container from "@/components/ui/container"
import NoResults from "@/components/ui/no-results"
import ProductCard from "@/components/ui/product-card"
import BillboardDisplay from "@/components/store/BillboardDisplay"
import Filter from "@/components/store/Filter"
import MobileFilters from "@/components/store/MobileFilter"

export const revalidate = 0

interface CategoryPageProps {
  params: {
    storeID: string
    categoryID: string
  }
  searchParams: {
    colorID: string
    sizeID: string
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const products = await prismadb.product.findMany({
    where: {
      categoryID: params.categoryID,
      colorID: searchParams.colorID,
      sizeID: searchParams.sizeID,
    },
    include: {
      images: true,
      color: true,
      size: true,
    },
  })

  const sizes = await prismadb.size.findMany({
    where: {
      storeID: params.storeID,
    },
  })

  const colors = await prismadb.color.findMany({
    where: {
      storeID: params.storeID,
    },
  })

  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryID,
    },
    include: {
      billboard: true,
    },
  })

  return (
    <div className="bg-white">
      <Container>
        <BillboardDisplay data={category?.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item: any) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
