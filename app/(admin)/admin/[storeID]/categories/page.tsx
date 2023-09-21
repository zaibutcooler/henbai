import prismadb from "@/lib/prismadb"

import CategoryListing from "./_components/CategoryListing"

export default async function CategoriesPage({
  params,
}: {
  params: { storeID: string }
}) {
  const categories = await prismadb.category.findMany({
    where: {
      storeID: params.storeID,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      created: "desc",
    },
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryListing data={categories} />
      </div>
    </div>
  )
}
