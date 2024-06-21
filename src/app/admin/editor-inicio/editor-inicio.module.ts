import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorInicioComponent } from './editor-inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgxEditorModule } from 'ngx-editor';



@NgModule({
  declarations: [
    EditorInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class EditorInicioModule { }
