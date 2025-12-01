import { Component, input } from '@angular/core'
import { CategoryCard } from '../category-card/category-card'
import { IProductCategory } from '../../../models/category.model'

@Component({
  selector: 'app-category-list',
  imports: [CategoryCard],
  templateUrl: './category-list.html',
  styles: ``,
})
export class CategoryList {
  categories = input.required<IProductCategory[]>()
}
