import { Router } from '@angular/router'
import { MatIcon } from '@angular/material/icon'
import { IProduct } from '../../../models/product.model'
import { EcommerceStore } from '../../../store/ecommerce-store'
import { Component, computed, inject, input } from '@angular/core'
import { MatButton, MatIconButton } from '@angular/material/button'

@Component({
  selector: 'app-product-details',
  imports: [MatButton, MatIconButton, MatIcon],
  templateUrl: './product-details.html',
  styles: ``,
})
export class ProductDetails {
  productData = input.required<IProduct>()

  private ecommerceStore = inject(EcommerceStore)
  private router = inject(Router)

  addToCart(product: IProduct) {
    if (this.isInCart()) {
      this.router.navigate(['/cart'])
      return
    }

    this.ecommerceStore.addToCart(product)
  }

  toggleWishlist(product: IProduct) {
    this.ecommerceStore.toggleWishlist(product)
  }

  isInWishlist = computed(() =>
    this.ecommerceStore.wishlist().some((item) => item.id === this.productData().id),
  )

  isInCart = computed(() =>
    this.ecommerceStore.cart().some((item) => item.id === this.productData().id),
  )
}
