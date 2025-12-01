import { Component, input } from '@angular/core';
import { IProduct } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  productData = input.required<IProduct>()

}
