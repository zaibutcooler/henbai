import prismadb from "@/lib/prismadb"
import { useStoreModal } from "@/hooks/useStoreModal"
import StoreModal from "@/components/modals/StoreModal"

import BillboardListing from "./_components/BillboardListing"

export default async function BillBoardPage({
  params,
}: {
  params: { storeID: string }
}) {
  const billboards = await prismadb.billboard.findMany({
    where: { storeID: params.storeID },
    orderBy: { created: "desc" },
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardListing data={billboards} />
      </div>
    </div>
  )
}
