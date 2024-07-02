import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorEnlacesRoutingModule } from './editor-enlaces-routing.module';
import { EditorEnlacesComponent } from './editor-enlaces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxEditorModule],
})
export class EditorEnlacesModule {}
