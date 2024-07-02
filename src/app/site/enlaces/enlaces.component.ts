import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Content from 'src/app/interfaces/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.scss'],
})
export class EnlacesComponent {
  html: SafeHtml = '';
  private content: Content | undefined;

  constructor(
    private contentService: ContentService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getContentById('2'); // Replace 'someContentId' with the actual id
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
