import { switchMap } from 'rxjs'
import { Component, inject, input } from '@angular/core'
import { ProductCard } from '../product-card/product-card'
import { CategoryService } from '../../../services/category'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-home-section',
  imports: [ProductCard],
  templateUrl: './home-section.html',
  styles: ``,
})
export class HomeSection {
  class = input<string>('')
  categoryId = input.required<number>()

  api = inject(CategoryService)

  categoryProducts = toSignal(
    toObservable(this.categoryId).pipe(switchMap((id) => this.api.fetchCategoryItems(id))),
    { initialValue: [] },
  )
}
