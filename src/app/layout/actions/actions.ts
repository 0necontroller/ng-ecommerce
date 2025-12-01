import { RouterLink } from '@angular/router'
import { MatIcon } from '@angular/material/icon'
import { Component, inject } from '@angular/core'
import { MatButton, MatIconButton } from '@angular/material/button'
import { EcommerceStore } from '../../store/ecommerce-store'

@Component({
  selector: 'app-header-actions',
  imports: [MatButton, MatIconButton, MatIcon, RouterLink],
  templateUrl: './actions.html',
  styles: ``,
})
export class Actions {
  private store = inject(EcommerceStore)

  wishlist = this.store.wishlist
  wishlistCount = this.store.wishlistItemsCount
  cartCount = this.store.cartItemsCount
}
