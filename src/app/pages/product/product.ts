import { ActivatedRoute } from '@angular/router'
import { map, switchMap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop'
import { ProductService } from '../../services/product'
import { Component, computed, inject } from '@angular/core'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductDetails } from '../../components/products/product-details/product-details'
import { RelatedProductList } from '../../components/products/related-product-list/related-product-list'

@Component({
  selector: 'app-product',
  imports: [ProductDetails, RelatedProductList, MatProgressSpinnerModule],
  templateUrl: './product.html',
  styles: ``,
})
export default class Product {
  private route = inject(ActivatedRoute)
  private api = inject(ProductService)

  product = toSignal(
    this.route.paramMap.pipe(
      map((params) => Number(params.get('productId'))),
      switchMap((id) => this.api.fetchSingleProduct(id)),
    ),
    { initialValue: null },
  )

  productData = computed(() => {
    return this.product()
  })
}
