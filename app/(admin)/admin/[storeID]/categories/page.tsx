import CategoryListing from "./_components/CategoryListing"

export default function CategoriesPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryListing />
      </div>
    </div>
  )
}
