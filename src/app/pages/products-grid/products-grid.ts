import { ActivatedRoute } from '@angular/router'
import { Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { CategoryService } from '../../services/category'
import { ProductCard } from '../../components/products/product-card/product-card'

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styles: ``,
})
export default class ProductsGrid {
  private api = inject(CategoryService)

  private activatedRoute = inject(ActivatedRoute)
  private categoryId = +this.activatedRoute.snapshot.paramMap.get('categoryId')!


  products = toSignal(this.api.fetchCategoryItems(this.categoryId), { initialValue: [] })

}
