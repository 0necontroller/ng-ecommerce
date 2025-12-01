import { Router } from '@angular/router'
import { AuthService } from '../../../services/auth'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { Component, inject, signal } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { EcommerceStore } from '../../../store/ecommerce-store'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.html',
})
export default class LoginComponent {
  private fb = inject(NonNullableFormBuilder)
  private auth = inject(AuthService)
  private store = inject(EcommerceStore)
  private router = inject(Router)

  hidePassword = signal(true)
  isLoading = signal(false)

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  async onSubmit() {
    if (this.loginForm.invalid) return

    this.isLoading.set(true)

    const { email, password } = this.loginForm.getRawValue()

    try {
      const user = await this.auth.login(email, password) // your real API call

      this.store.setUserInfo({ name: user.name, email: user.email })

      this.router.navigate(['/cart'])
    } catch (error) {
      alert('Login failed. Please check your credentials.')
    } finally {
      this.isLoading.set(false)
    }
  }
}
