import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import Content from 'src/app/interfaces/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-editor-materiales',
  templateUrl: './editor-materiales.component.html',
  styleUrls: ['./editor-materiales.component.scss'],
})
export class EditorMaterialesComponent {
  editor!: Editor;
  html = '';
  private content: Content | undefined;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(public contentService: ContentService) {}

  ngOnInit(): void {
    // Inicializar el editor
    this.editor = new Editor();

    //Escribir lo que contenga el registro actual con el id 1
    this.getContentById('3');
  }

  confirmContent(): void {
    // Actualizar el contenido en el servicio
    this.content!.id = '3';
    this.content!.nombre = 'Materiales';
    this.content!.contenido = this.html;
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
