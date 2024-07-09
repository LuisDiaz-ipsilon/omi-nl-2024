import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorExamenesRoutingModule } from './editor-examenes-routing.module';
import { EditorExamenesComponent } from './editor-examenes.component';


@NgModule({
  declarations: [
    EditorExamenesComponent
  ],
  imports: [
    CommonModule,
    EditorExamenesRoutingModule
  ]
})
export class EditorExamenesModule { }
