import prismadb from "@/lib/prismadb"

import CategoryForm from "../_components/CategoryForm"

export default async function CategoryDetailPage({
  params,
}: {
  params: { catagoryID: string; storeID: string }
}) {
  const billboards = await prismadb.billboard.findMany({
    where: { storeID: params.storeID },
    orderBy: { created: "desc" },
  })
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={null} billboards={billboards} />
      </div>
    </main>
  )
}
