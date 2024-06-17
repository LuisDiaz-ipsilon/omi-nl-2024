import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NlnComponent } from './nln/nln.component';
import { MioiComponent } from './mioi/mioi.component';


@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent,
    NlnComponent,
    MioiComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
  ]
})
export class InicioModule { }
