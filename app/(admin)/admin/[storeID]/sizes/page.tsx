import prismadb from "@/lib/prismadb"

import SizeListing from "./_components/SizeListing"

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

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeListing data={sizes} />
      </div>
    </div>
  )
}
