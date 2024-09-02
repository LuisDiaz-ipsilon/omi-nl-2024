import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorExamenesRoutingModule } from './editor-examenes-routing.module';
import { EditorExamenesComponent } from './editor-examenes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    //EditorExamenesComponent
  ],
  imports: [
    CommonModule,
    EditorExamenesRoutingModule, ReactiveFormsModule, NgxEditorModule
  ]
})
export class EditorExamenesModule { }
