import SizeForm from "../_components/SizeForm"

export default function SizeDetailPage({
  params,
}: {
  params: { billboardID: string }
}) {
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={null} />
      </div>
    </main>
  )
}
