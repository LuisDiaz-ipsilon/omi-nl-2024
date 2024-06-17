import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialesRoutingModule } from './materiales-routing.module';
import { MaterialesComponent } from './materiales.component';


@NgModule({
  declarations: [
    MaterialesComponent
  ],
  imports: [
    CommonModule,
    MaterialesRoutingModule
  ]
})
export class MaterialesModule { }
