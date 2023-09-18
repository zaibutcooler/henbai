import BillboardForm from "../_components/BillboardForm"

export default function BillBoardDetailPage({
  params,
}: {
  params: { billboardID: string }
}) {
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={null} />
      </div>
    </main>
  )
}
