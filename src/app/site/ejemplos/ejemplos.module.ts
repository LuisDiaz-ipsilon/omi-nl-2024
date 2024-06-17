import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { EjemplosComponent } from './ejemplos.component';


@NgModule({
  declarations: [
    EjemplosComponent
  ],
  imports: [
    CommonModule,
    EjemplosRoutingModule
  ]
})
export class EjemplosModule { }
