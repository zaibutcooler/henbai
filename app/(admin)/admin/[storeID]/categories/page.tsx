import { format } from "date-fns"

import prismadb from "@/lib/prismadb"

import CategoryListing from "./_components/CategoryListing"
import { CategoryColumn } from "./_components/table/columns"

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

  const filteredCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.created, "MMMM do, yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryListing data={filteredCategories} />
      </div>
    </div>
  )
}
