import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home'),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login'),
  },
  {
    path: 'category/:categoryId',
    loadComponent: () => import('./pages/products-grid/products-grid'),
  },
  {
    path: 'product/:productId',
    loadComponent: () => import('./pages/product/product'),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart'),
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./pages/my-wishlist/my-wishlist'),
  },
]
