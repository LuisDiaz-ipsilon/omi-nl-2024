import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.router.navigate(['/admin-editor']);
    if (this.authService.login(this.password)) {
      this.router.navigate(['/admin-editor']);
    } else {
      alert('Contraseña incorrecta');
    }
  }
}
