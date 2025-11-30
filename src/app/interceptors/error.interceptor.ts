import { catchError, throwError } from 'rxjs'
import { HttpInterceptorFn } from '@angular/common/http'

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err) => {
      console.error('API error:', err)
      return throwError(() => err)
    }),
  )
}
