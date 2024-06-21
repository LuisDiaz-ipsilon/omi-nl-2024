import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NlnComponent } from './nln/nln.component';
import { MioiComponent } from './mioi/mioi.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { DonacionComponent } from './donacion/donacion.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent,
    NlnComponent,
    MioiComponent,
    ConvocatoriaComponent,
    DonacionComponent,
  ],
  imports: [CommonModule, InicioRoutingModule, NgxEditorModule, FormsModule],
})
export class InicioModule {}
