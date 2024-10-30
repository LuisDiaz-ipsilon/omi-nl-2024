import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSiteService } from 'src/app/services/auth-site.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string | null = null;
  isAdmin: boolean = false; // Nueva propiedad para verificar el rol de admin


  constructor(private authService: AuthSiteService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.authService.getUsername();
      this.checkIfAdmin(); // Verificar si el usuario es admin
    }
  }
  

  navigateTo(page: string): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.router.navigate([page]);
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/inicio']);
  }

  // Método para verificar si el usuario tiene el rol de admin
  checkIfAdmin(): void {
    const roles = this.authService.getRoles();
    this.isAdmin = roles.includes('admin');
  }

}
