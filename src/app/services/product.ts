import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient)
  private baseUrl = 'https://api.escuelajs.co/api/v1/products'


 fetchSingleProduct(productId: number) {
    return this.http.get<IProduct>(`${this.baseUrl}/${productId}`)
  }

  fetchRelatedProducts(productId: number) {
    return this.http.get<IProduct[]>(`${this.baseUrl}/${productId}/related`)
  }
}
