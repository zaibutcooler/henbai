import ColorForm from "../_components/ColorForm"

export default function ColorDetailPage({
  params,
}: {
  params: { billboardID: string }
}) {
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={null} />
      </div>
    </main>
  )
}
