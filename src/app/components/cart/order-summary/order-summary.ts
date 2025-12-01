import { Component, inject } from '@angular/core'
import { EcommerceStore } from '../../../store/ecommerce-store'

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.html',
  styles: ``,
})
export class OrderSummary {
  private store = inject(EcommerceStore)


  get subtotal() {
    return this.store.cart().reduce((total, item) => total + item.price, 0)
  }
}
