import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import Content from 'src/app/interfaces/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-editor-inicio',
  templateUrl: './editor-inicio.component.html',
  styleUrls: ['./editor-inicio.component.scss'],
})
export class EditorInicioComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html = '';
  private content: Content | undefined;

  constructor(public contentService: ContentService) {}

  ngOnInit(): void {
    // Inicializar el editor
    this.editor = new Editor();

    //Escribir lo que contenga el registro actual con el id 1
    this.getContentById('1');
  }

  confirmContent(): void {
    // Actualizar el contenido en el servicio
    this.content!.id = '1'
    this.content!.nombre = 'inicio'
    this.content!.contenido = this.html
    this.updateContent(this.content!);
  }

  getContentById(id: string): void {
    this.contentService.getContentById(id).subscribe(
      (data: Content) => {
        this.content = data;
        this.html = this.content.contenido;
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
  }

  updateContent(content: Content): void {
    this.contentService
      .updateContent(content)
      .then(() => {
        console.log('Contenido actualizado correctamente.');
      })
      .catch((error) => {
        console.error('Error actualizando contenido:', error);
      });
  }

  ngOnDestroy(): void {
    // Asegurarse de destruir el editor para liberar recursos
    this.editor.destroy();
  }

  // Método que se llama cuando el contenido cambia
  onContentChange(content: string): void {
    //this.html = content;
  }
}
