import { IProductCategory } from "./category.model"

export interface IProduct {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: IProductCategory
  images: string[]
}
