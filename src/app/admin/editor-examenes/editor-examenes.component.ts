import { Component, OnDestroy, OnInit} from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import Content from 'src/app/interfaces/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-editor-examenes',
  templateUrl: './editor-examenes.component.html',
  styleUrls: ['./editor-examenes.component.scss']
})
export class EditorExamenesComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html = '';
  private content: Content | undefined;

  editor5!: Editor; //bachiller
  html5 = '';
  private content5: Content | undefined;

  editor6!: Editor; //ingenieria
  html6 = '';
  private content6: Content | undefined;

  editor7!: Editor; //primaria
  html7 = '';
  private content7: Content | undefined;

  editor8!: Editor; //secundaria
  html8 = '';
  private content8: Content | undefined;

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
    this.editor5 = new Editor();
    this.editor6 = new Editor();
    this.editor7 = new Editor();
    this.editor8 = new Editor();


    //Escribir lo que contenga el registro actual con el id 1
    this.getContent();
  }

  confirmContent(): void {
    // Actualizar el contenido en el servicio
    this.content!.id = '4';
    this.content!.nombre = 'examenes';
    this.content!.contenido = this.html;
    this.updateContent(this.content!);
  }

  confirmContentBachiller(): void {
    // Actualizar el contenido en el servicio
    this.content5!.id = '5';
    this.content5!.nombre = 'examenesBachiller';
    this.content5!.contenido = this.html5;
    this.updateContent(this.content5!);
  }

  confirmContentIngenieria(): void {
    // Actualizar el contenido en el servicio
    this.content6!.id = '6';
    this.content6!.nombre = 'examenesIngenieria';
    this.content6!.contenido = this.html6;
    this.updateContent(this.content6!);
  }

  confirmContentPrimaria(): void {
    // Actualizar el contenido en el servicio
    this.content7!.id = '7';
    this.content7!.nombre = 'examenesPrimaria';
    this.content7!.contenido = this.html7;
    this.updateContent(this.content7!);
  }

  confirmContentSecundaria(): void {
    // Actualizar el contenido en el servicio
    this.content8!.id = '8';
    this.content8!.nombre = 'examenesSecundaria';
    this.content8!.contenido = this.html8;
    this.updateContent(this.content8!);
  }

  getContent(): void {
    this.contentService.getContentById('4').subscribe(
      (data: Content) => {
        this.content = data;
        this.html = this.content.contenido;
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
    this.contentService.getContentById('5').subscribe(
      (data: Content) => {
        this.content5 = data;
        this.html5 = this.content5.contenido;
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
    this.contentService.getContentById('6').subscribe(
      (data: Content) => {
        this.content6 = data;
        this.html6 = this.content6.contenido;
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
    this.contentService.getContentById('7').subscribe(
      (data: Content) => {
        this.content7 = data;
        this.html7 = this.content7.contenido;
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
    this.contentService.getContentById('8').subscribe(
      (data: Content) => {
        this.content8 = data;
        this.html8 = this.content8.contenido;
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
    this.editor5.destroy();
    this.editor6.destroy();
    this.editor7.destroy();
    this.editor8.destroy();
  }

  // Método que se llama cuando el contenido cambia
  onContentChange(content: string): void {
    //this.html = content;
  }
}
