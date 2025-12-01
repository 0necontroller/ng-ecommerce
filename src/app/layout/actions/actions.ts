import { RouterLink } from '@angular/router'
import { MatIcon } from '@angular/material/icon'
import { Component, inject } from '@angular/core'
import { MatMenuModule } from '@angular/material/menu'
import { EcommerceStore } from '../../store/ecommerce-store'
import { MatButtonModule, MatButton, MatIconButton } from '@angular/material/button'

@Component({
  selector: 'app-header-actions',
  imports: [MatButton, MatIconButton, MatIcon, RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './actions.html',
  styles: ``,
})
export class Actions {
  private store = inject(EcommerceStore)

  wishlist = this.store.wishlist
  wishlistCount = this.store.wishlistItemsCount
  cartCount = this.store.cartItemsCount

  isLoggedIn = this.store.userLoggedIn
  userName = this.store.userName
  userEmail = this.store.userEmail

  signOut() {
    this.store.signOut({})
  }
}
