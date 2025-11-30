import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { IProductCategory } from '../models/category.model'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient)
  private baseUrl = 'https://api.escuelajs.co/api/v1/categories'

  fetchCategories() {
    return this.http.get<IProductCategory[]>(this.baseUrl)
  }
}
