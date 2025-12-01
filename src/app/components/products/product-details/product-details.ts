import { Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { IProduct } from '../../../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [MatButton],
  templateUrl: './product-details.html',
  styles: ``,
})
export class ProductDetails {
  productData = input.required<IProduct>()

}
