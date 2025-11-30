import { Component, input } from '@angular/core'
import { IProductCategory } from '../../../models/category.model'

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.html',
  styles: ``,
})
export class CategoryCard {
  category = input.required<IProductCategory>()


}
