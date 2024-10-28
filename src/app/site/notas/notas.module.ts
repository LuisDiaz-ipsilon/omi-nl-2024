import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotasComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class NotasModule { }
