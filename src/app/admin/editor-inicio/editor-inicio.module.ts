import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorInicioComponent } from './editor-inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    EditorInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class EditorInicioModule { }
