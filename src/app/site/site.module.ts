import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { InicioModule } from './inicio/inicio.module';
import { GaleriaModule } from './galeria/galeria.module';
import { EnlacesModule } from './enlaces/enlaces.module';
import { MaterialesModule } from './materiales/materiales.module';
import { EjemplosModule } from './ejemplos/ejemplos.module';
import { ExamenesModule } from './examenes/examenes.module';


@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    InicioModule,
    GaleriaModule,
    EnlacesModule,
    MaterialesModule,
    EjemplosModule,
    ExamenesModule,
    
  ],

})
export class SiteModule { }
