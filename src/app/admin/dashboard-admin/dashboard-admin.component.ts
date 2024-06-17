import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent {
  
  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
}
