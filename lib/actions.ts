import { Category } from "@prisma/client"
import axios from "axios"

import prismadb from "./prismadb"
import { getUrl } from "./utils"

export const getCategories = async (storeID: string): Promise<Category[]> => {
  try {
    const res = await prismadb.category.findMany({
      where: {
        storeID: storeID,
      },
    })

    return res
  } catch (err) {
    console.log("error", err)
    return []
  }
}
