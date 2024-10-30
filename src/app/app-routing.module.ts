import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authAdminGuard } from './guards/auth-admin.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth-site/auth-site-routing.module').then((m) => m.AuthSiteRoutingModule)
  },
  {
    path: 'admin-editor',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard],
  },
  {
    path: '',
    loadChildren: () => import('./site/site.module').then((m) => m.SiteModule),
  },
  {
    path: '**',
    redirectTo: '',
    //loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
