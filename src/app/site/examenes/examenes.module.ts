import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenesRoutingModule } from './examenes-routing.module';
import { ExamenesComponent } from './examenes.component';


@NgModule({
  declarations: [
    ExamenesComponent
  ],
  imports: [
    CommonModule,
    ExamenesRoutingModule
  ]
})
export class ExamenesModule { }
