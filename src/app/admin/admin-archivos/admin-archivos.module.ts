import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminArchivosRoutingModule } from './admin-archivos-routing.module';
import { AdminArchivosComponent } from './admin-archivos.component';
import { ArchivosService } from 'src/app/services/archivos.service';
import { ArhivosAdminService } from 'src/app/services/arhivos-admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminArchivosComponent
  ],
  imports: [
    CommonModule,
    AdminArchivosRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ArhivosAdminService,
    ArchivosService
  ],
})
export class AdminArchivosModule { }
