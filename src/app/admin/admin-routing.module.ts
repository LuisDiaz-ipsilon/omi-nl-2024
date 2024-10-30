import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { EditorInicioComponent } from './editor-inicio/editor-inicio.component';
import { EditorGaleriaComponent } from './editor-galeria/editor-galeria.component';
import { EditorEnlacesComponent } from './editor-enlaces/editor-enlaces.component';
import { EditorMaterialesComponent } from './editor-materiales/editor-materiales.component';
import { EditorExamenesComponent } from './editor-examenes/editor-examenes.component';
import { AdminArchivosComponent } from './admin-archivos/admin-archivos.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,
    children: [
      { path: 'editor-inicio', component: EditorInicioComponent },
      { path: 'editor-galeria', component: EditorGaleriaComponent },
      { path: 'editor-enlaces', component: EditorEnlacesComponent },
      { path: 'editor-materiales', component: EditorMaterialesComponent },
      { path: 'editor-examenes', component: EditorExamenesComponent },
      { path: 'editor-archivos', component: AdminArchivosComponent },
      { path: '', redirectTo: 'editor-inicio', pathMatch: 'full' },
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
export class AdminRoutingModule { }
