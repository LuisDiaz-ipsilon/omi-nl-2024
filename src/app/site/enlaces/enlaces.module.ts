import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnlacesRoutingModule } from './enlaces-routing.module';
import { EnlacesComponent } from './enlaces.component';


@NgModule({
  declarations: [
    EnlacesComponent
  ],
  imports: [
    CommonModule,
    EnlacesRoutingModule
  ]
})
export class EnlacesModule { }
