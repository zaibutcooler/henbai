"use client"

import { ColumnDef } from "@tanstack/react-table"

import BillboardCellAction from "./BillboardCellAction"

export type BillboardColumn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "label",
  },
  {
    accessorKey: "createdAt",
    header: "createdAt",
  },
  {
    id: "actions",
    cell: ({ row }) => <BillboardCellAction data={row.original} />,
  },
]
