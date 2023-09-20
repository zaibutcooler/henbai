import ProductListing from "./_components/ProductListing"

export default function ProductPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductListing />
      </div>
    </div>
  )
}
