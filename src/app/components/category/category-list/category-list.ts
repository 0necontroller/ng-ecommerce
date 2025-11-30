import { Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryService } from '../../../services/category'
import { CategoryCard } from '../category-card/category-card'

@Component({
  selector: 'app-category-list',
  imports: [CategoryCard],
  templateUrl: './category-list.html',
  styles: ``,
})
export class CategoryList {
  api = inject(CategoryService)

  categories = toSignal(this.api.fetchCategories(),{initialValue: []})
}
