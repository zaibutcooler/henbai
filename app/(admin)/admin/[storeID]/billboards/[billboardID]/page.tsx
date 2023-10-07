import prismadb from "@/lib/prismadb"
import BillboardForm from "../_components/BillboardForm"

export default async function BillBoardDetailPage({
  params,
}: {
  params: { billboardID: string }
}) {

  const billboard = await prismadb.billboard.findUnique({
    where:{
      id:params.billboardID
    }
  })

  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={null} />
      </div>
    </main>
  )
}
