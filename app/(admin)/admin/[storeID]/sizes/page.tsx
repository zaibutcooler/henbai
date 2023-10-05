import { format } from "date-fns"

import prismadb from "@/lib/prismadb"

import SizeListing from "./_components/SizeListing"
import { SizeColumn } from "./_components/table/columns"

export default async function SizePage({
  params,
}: {
  params: { storeID: string }
}) {
  const sizes = await prismadb.size.findMany({
    where: {
      storeID: params.storeID,
    },
    orderBy: {
      created: "desc",
    },
  })

  const filteredSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.created, "MMMM do, yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeListing data={filteredSizes} />
      </div>
    </div>
  )
}
