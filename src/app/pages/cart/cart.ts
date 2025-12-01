import { RouterLink } from '@angular/router'
import { MatIcon } from '@angular/material/icon'
import { Component, inject } from '@angular/core'
import { MatButton } from '@angular/material/button'
import { EcommerceStore } from '../../store/ecommerce-store'
import { OrderSummary } from '../../components/cart/order-summary/order-summary'
import { ProductCard } from '../../components/products/product-card/product-card'

@Component({
  selector: 'app-cart',
  imports: [ProductCard, OrderSummary, RouterLink, MatButton, MatIcon],
  templateUrl: './cart.html',
  styles: ``,
})
export default class Cart {
  private store = inject(EcommerceStore)

  cartItems = this.store.cart
}
