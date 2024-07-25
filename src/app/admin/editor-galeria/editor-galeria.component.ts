import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

interface GalleryImage {
  url: string;
  description: string;
}

@Component({
  selector: 'app-editor-galeria',
  templateUrl: './editor-galeria.component.html',
  styleUrls: ['./editor-galeria.component.scss'],
})
export class EditorGaleriaComponent {
  images: GalleryImage[] = [];

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.loadImages();
    console.log(this.images);
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await this.imageService.uploadImage(file);
      if (imageUrl) {
        // Aquí puedes pedir al usuario una descripción de la imagen
        const description = prompt(
          'Por favor, proporciona una breve descripción de la imagen:'
        );
        this.images.push({ url: imageUrl, description: description || '' });
      }
    }
  }

  async loadImages() {
    const imageUrls = await this.imageService.getImageList();
  }
}
