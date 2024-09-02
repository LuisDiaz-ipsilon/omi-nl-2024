import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSiteRoutingModule } from './auth-site-routing.module';
import { AuthSiteComponent } from './auth-site.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthSiteComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,              
    AuthSiteRoutingModule,
    ReactiveFormsModule,        
    RouterModule              
  ]
})
export class AuthSiteModule { }
