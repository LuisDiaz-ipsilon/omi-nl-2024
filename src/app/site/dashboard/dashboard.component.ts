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


  constructor(private authService: AuthSiteService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.authService.getUsername();
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

}
