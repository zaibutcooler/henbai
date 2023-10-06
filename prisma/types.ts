export interface ImageType {
  id: string
  url: string
  created: Date
  updated: Date
}

export interface CustomProduct {
  id: string
  storeID: string
  categoryID: string
  name: string
  price: number // Change to the appropriate type based on your schema.
  isFeatured: boolean
  isArchived: boolean
  sizeID: string
  colorID: string
  images: ImageType[] // Nest the Image interface here
  created: Date
  updated: Date
}
