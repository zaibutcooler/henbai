import { getCategories } from "@/lib/actions"

export default async function StorePage({
  params,
}: {
  params: { storeID: string }
}) {
  const categories = await getCategories(params.storeID)

  return (
    <main>
      {categories.map((item) => (
        <div>{item.name}</div>
      ))}
    </main>
  )
}
