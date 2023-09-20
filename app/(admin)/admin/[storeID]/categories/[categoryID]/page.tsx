import CategoryForm from "../_components/CategoryForm"

export default function CategoryDetailPage({
  params,
}: {
  params: { catagoryID: string }
}) {
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={null} />
      </div>
    </main>
  )
}
