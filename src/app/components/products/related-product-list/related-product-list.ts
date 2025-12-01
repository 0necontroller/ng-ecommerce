import { switchMap } from 'rxjs'
import { Component, inject, input } from '@angular/core'
import { ProductService } from '../../../services/product'
import { ProductCard } from '../product-card/product-card'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-related-product-list',
  imports: [ProductCard],
  templateUrl: './related-product-list.html',
  styles: ``,
})
export class RelatedProductList {
  productId = input.required<number>()
  class = input<string>('')

  private api = inject(ProductService)

  relatedProducts = toSignal(
    toObservable(this.productId).pipe(switchMap((id) => this.api.fetchRelatedProducts(id))),
    { initialValue: [] },
  )
}
