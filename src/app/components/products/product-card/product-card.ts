import { RouterLink } from '@angular/router'
import { MatIcon } from '@angular/material/icon'
import { IProduct } from '../../../models/product.model'
import { EcommerceStore } from '../../../store/ecommerce-store'
import { Component, computed, inject, input } from '@angular/core'
import { MatButton, MatIconButton } from '@angular/material/button'

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, MatButton, MatIcon, MatIconButton],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  private ecommerceStore = inject(EcommerceStore)
  productData = input.required<IProduct>()

  addToCart(product: IProduct) {
    this.ecommerceStore.addToCart(product)
  }

  removeFromCart(productId: number) {
    this.ecommerceStore.removeFromCart(productId)
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
