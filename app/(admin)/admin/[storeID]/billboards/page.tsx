import { format } from "date-fns"

import prismadb from "@/lib/prismadb"
import { useStoreModal } from "@/hooks/useStoreModal"
import StoreModal from "@/components/modals/StoreModal"

import BillboardListing from "./_components/BillboardListing"
import { BillboardColumn } from "./_components/billboardtable/columns"

export default async function BillBoardPage({
  params,
}: {
  params: { storeID: string }
}) {
  const billboards = await prismadb.billboard.findMany({
    where: { storeID: params.storeID },
    orderBy: { created: "desc" },
  })

  const filteredBillboards: BillboardColumn[] = await billboards.map(
    (item) => ({
      id: item.id,
      label: item.label,
      createdAt: format(item.created, "MMMM do, yyyy"),
    })
  )

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardListing data={filteredBillboards} />
      </div>
    </div>
  )
}
