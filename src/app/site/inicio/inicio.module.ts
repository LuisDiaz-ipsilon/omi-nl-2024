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
import { ContentService } from 'src/app/services/content.service';
import { HttpClientModule } from '@angular/common/http';
import { DonarComponent } from './donar/donar.component';


@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent,
    NlnComponent,
    MioiComponent,
    ConvocatoriaComponent,
    DonacionComponent,
    DonarComponent
  ],
  imports: [CommonModule, InicioRoutingModule, NgxEditorModule, FormsModule, HttpClientModule],
  providers: [ContentService],
})
export class InicioModule {}
