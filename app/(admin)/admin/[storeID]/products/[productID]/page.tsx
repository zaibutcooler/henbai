import ProductForm from "../_components/ProductForm"

export default function ProductDetailPage({
  params,
}: {
  params: { billboardID: string }
}) {
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={null}
          colors={[]}
          sizes={[]}
          categories={[]}
        />
      </div>
    </main>
  )
}
