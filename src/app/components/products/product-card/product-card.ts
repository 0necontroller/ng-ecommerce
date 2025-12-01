import { RouterLink } from '@angular/router'
import { MatButton } from '@angular/material/button'
import { IProduct } from '../../../models/product.model'
import { Component, inject, input } from '@angular/core'
import { EcommerceStore } from '../../../store/ecommerce-store'

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, MatButton],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  ecommerceStore = inject(EcommerceStore)
  productData = input.required<IProduct>()

  addToCart(product: IProduct) {
    this.ecommerceStore.addToCart(product)
  }
}
