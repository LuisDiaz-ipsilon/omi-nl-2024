import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Content from 'src/app/interfaces/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss']
})
export class ExamenesComponent {
  html: SafeHtml = '';
  private content: Content | undefined;
  private escolaridadExamenReferencia: string = '';

  constructor(
    private contentService: ContentService,
    private sanitizer: DomSanitizer
  ) {}

  //Conocer la escolaridad del estudiante para determinar que examenes podra ver en la plataforma.
  obtenerEscolaridad(){
    //ToDo encontrar la escolaridad y determinar si vera los examanes para primaria(4), secundaria (5), secundaria(6), prepa(7), universidad(8);
    this.escolaridadExamenReferencia = '5';
    this.getContentById(this.escolaridadExamenReferencia);
  }

  ngOnInit(): void {
    this.obtenerEscolaridad();
  }

  getContentById(id: string): void {
    this.contentService.getContentById(id).subscribe(
      (data: Content) => {
        this.content = data;
        this.html = this.content.contenido;
        this.html = this.sanitizeHtml(this.content.contenido);
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
