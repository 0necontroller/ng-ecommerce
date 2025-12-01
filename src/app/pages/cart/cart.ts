import { Component, inject } from '@angular/core'
import { ProductCard } from '../../components/products/product-card/product-card'
import { EcommerceStore } from '../../store/ecommerce-store'

@Component({
  selector: 'app-cart',
  imports: [ProductCard],
  templateUrl: './cart.html',
  styles: ``,
})
export default class Cart {
  private store = inject(EcommerceStore)

  cartItems = this.store.cart
}
