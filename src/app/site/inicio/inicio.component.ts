import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Content from 'src/app/interfaces/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  text = '';
  private content: Content | undefined;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getContentById('1'); // Replace 'someContentId' with the actual id
  }

  getContentById(id: string): void {
    this.contentService.getContentById(id).subscribe(
      (data: Content) => {
        this.content = data;
        this.text = this.content.contenido
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
  }

}
