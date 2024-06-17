import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentService } from '../services/content.service';
import { BrowserModule } from '@angular/platform-browser';
import { EditorInicioComponent } from './editor-inicio/editor-inicio.component';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    EditorInicioComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [ContentService],
})
export class AdminModule { }
