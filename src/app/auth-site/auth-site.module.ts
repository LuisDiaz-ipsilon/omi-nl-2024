import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSiteRoutingModule } from './auth-site-routing.module';
import { AuthSiteComponent } from './auth-site.component';


@NgModule({
  declarations: [
    AuthSiteComponent
  ],
  imports: [
    CommonModule,
    AuthSiteRoutingModule
  ]
})
export class AuthSiteModule { }
