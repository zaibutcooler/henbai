import { format } from "date-fns"

import prismadb from "@/lib/prismadb"

import ColorListing from "./_components/ColorListing"
import { ColorColumn } from "./_components/table/columns"

export default async function ColorPage({
  params,
}: {
  params: { storeID: string }
}) {
  const colors = await prismadb.color.findMany({
    where: {
      storeID: params.storeID,
    },
    orderBy: {
      created: "desc",
    },
  })

  const filteredColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.created, "MMMM do, yyyy"),
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorListing data={filteredColors} />
      </div>
    </div>
  )
}
