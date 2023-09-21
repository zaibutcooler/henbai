import prismadb from "@/lib/prismadb"

import ColorListing from "./_components/ColorListing"

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

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorListing data={colors} />
      </div>
    </div>
  )
}
