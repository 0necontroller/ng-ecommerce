import { Component, inject, input } from '@angular/core'
import { IProductCategory } from '../../../models/category.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.html',
  styles: ``,
})
export class CategoryCard {
  router = inject(Router)
  category = input.required<IProductCategory>()

  navigateToCategory(categoryId: number) {
    console.log('Navigating to category:', categoryId)
    this.router.navigate(['/category', categoryId])
  }
}
