import { Router, RouterLink } from '@angular/router'
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
  private router = inject(Router)
  productData = input.required<IProduct>()

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
