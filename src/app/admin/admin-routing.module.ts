import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { EditorInicioComponent } from './editor-inicio/editor-inicio.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,
    children: [
      {path: 'editor-inicio', component: EditorInicioComponent },
      { path: '', redirectTo: 'editor-inicio', pathMatch: 'full' },
      
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
