import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarouselComponent } from './inicio/carousel/carousel.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { EjemplosComponent } from './ejemplos/ejemplos.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { DonarComponent } from './inicio/donar/donar.component';
import { nodes } from 'ngx-editor';
import { NotasComponent } from './notas/notas.component';
import { authGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'enlaces', component: EnlacesComponent },
      { path: 'materiales', component: MaterialesComponent },
      { path: 'ejemplos', component: EjemplosComponent },
      { path: 'examenes', component: ExamenesComponent, canActivate: [authGuard]}, 
      { path: 'donar', component: DonarComponent },
      { path: 'notas', component: NotasComponent, canActivate: [authGuard]}
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
