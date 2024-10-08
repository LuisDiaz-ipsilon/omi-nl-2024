import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSiteComponent } from './auth-site.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'', redirectTo: '', pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'login', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSiteRoutingModule { }
