import { Category } from "@prisma/client"
import axios from "axios"

import prismadb from "./prismadb"
import { getUrl } from "./utils"

export const getCategoriesForNav = async (
  storeID: string
): Promise<Category[]> => {
  try {
    const res = await fetch(`/api/admin/${storeID}/categories`)
    const data = await res.json()
    console.log("res", data)

    return data
  } catch (err) {
    console.log("error", err)
    return []
  }
}
