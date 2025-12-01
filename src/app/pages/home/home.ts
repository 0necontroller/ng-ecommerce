import { Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { CategoryService } from '../../services/category'
import { HomeSection } from '../../components/products/home-section/home-section'
import { CategoryList } from '../../components/category/category-list/category-list'

@Component({
  selector: 'app-home',
  imports: [CategoryList, HomeSection],
  templateUrl: './home.html',
  styles: ``,
})
export default class Home {
  private api = inject(CategoryService)

  categories = toSignal(this.api.fetchCategories(), { initialValue: [] })
}
