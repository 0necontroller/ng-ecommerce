import { Component, inject } from '@angular/core'
import { EcommerceStore } from '../../store/ecommerce-store'
import { ProductCard } from '../../components/products/product-card/product-card'

@Component({
  selector: 'app-my-wishlist',
  imports: [ProductCard],
  templateUrl: './my-wishlist.html',
  styles: ``,
})
export default class MyWishlist {
  private store = inject(EcommerceStore)

  wishlistItems = this.store.wishlist
}
