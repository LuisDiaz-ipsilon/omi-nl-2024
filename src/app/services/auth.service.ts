import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/** 
 * Este service solo sirve para la authentificacion de administrador, la qye se accese a 
 * 'https://dominio/admin'
**/


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly password: string = 'omi123';
  private isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  login(password: string): boolean {
    if (password === this.password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
