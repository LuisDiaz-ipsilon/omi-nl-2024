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
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from '../utils/custom-route-reuse-strategy';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    InicioModule,
    GaleriaModule,
    EnlacesModule,
    MaterialesModule,
    EjemplosModule,
    ExamenesModule,
    NgxEditorModule,

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
})
export class SiteModule {}
