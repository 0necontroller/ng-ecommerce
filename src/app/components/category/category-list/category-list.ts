import { Component, inject, signal } from '@angular/core'
import { CategoryCard } from '../category-card/category-card'
import { CategoryService } from '../../../services/category'

@Component({
  selector: 'app-category-list',
  imports: [CategoryCard],
  templateUrl: './category-list.html',
  styles: ``,
})
export class CategoryList {
  api = inject(CategoryService)

  categories = signal(this.api.fetchCategories())
}
