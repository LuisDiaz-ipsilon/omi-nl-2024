import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-editor-inicio',
  templateUrl: './editor-inicio.component.html',
  styleUrls: ['./editor-inicio.component.scss'],
})
export class EditorInicioComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html = '';

  constructor(public contentService: ContentService) {}

  ngOnInit(): void {
    // Inicializar el editor
    this.editor = new Editor();

    // Suscribirse al contenido actual para mantener actualizado el HTML
    this.contentService.currentContent.subscribe(
      (content) => (this.html = content)
    );
  }

  ngOnDestroy(): void {
    // Asegurarse de destruir el editor para liberar recursos
    this.editor.destroy();
  }

  // Método que se llama cuando el contenido cambia
  onContentChange(content: string): void {
    this.html = content;
  }

  confirmContent(): void {
    // Actualizar el contenido en el servicio
    console.log('Contenido confirmado: ' + this.html);
    this.contentService.updateContent(this.html);
  }
}
