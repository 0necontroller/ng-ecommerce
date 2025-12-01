import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class AuthService {

  login(email: string, password: string) {
    return Promise.resolve({
      name: 'John Doe',
      email: email,
    })
  }
}
