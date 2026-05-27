import { Component } from '@angular/core';
import { LoginRequest } from '../../core/models/Login-request.model';
import { AuthService } from '../../core/service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
	imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
	standalone: true
})
export class LoginComponent {

  login: string = '';
  password: string = '';

  loading = false;
  error: string | null = null;
  success = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.loading = true;
    this.error = null;
    this.success = false;

    const data: LoginRequest = {
      login: this.login,
      password: this.password
    };

    this.authService.login(data).subscribe({
      next: (response: any) => {
				localStorage.setItem('token', response.token || response);
				this.success = true;
				this.loading = false;

        this.router.navigate(['/student']);
			},
      error: (err: any) => {
        this.error = 'Login failed';
        this.loading = false;
      }
    });
  }
}