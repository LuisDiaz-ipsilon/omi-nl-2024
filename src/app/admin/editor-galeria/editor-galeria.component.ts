import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
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
export class EditorGaleriaComponent implements OnInit {
  selectedFile: File | null = null;
  uploadError: string | null = null;

  images: any[] = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.loadImages();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] ?? null;
  }

  async uploadImage(event: Event) {
    event.preventDefault();
    if (!this.selectedFile) {
      this.uploadError = 'No file selected';
      return;
    }

    const url = await this.imagesService.uploadImage(this.selectedFile);
    if (url) {
      this.uploadError = null;
      // Aquí puedes actualizar la galería o realizar alguna acción con el URL
      console.log('Image uploaded successfully:', url);
      this.loadImages();
    } else {
      this.uploadError = 'Error uploading image';
    }
  }

  async deleteImage(imageUrl: string) {
    let fileName = imageUrl.split('/').pop();
    fileName = fileName!.split('?').shift();
    if (fileName) {
      await this.imagesService.deleteImage(fileName);
      this.images = this.images.filter(image => image.src !== imageUrl);
      this.loadImages();
    }
  }

  private _extractFileName(url: string): string {
    // Usar una expresión regular para extraer el nombre del archivo
    const regex = /\/([^\/?#]+)(?:\?.*)?$/;
    const matches = url.match(regex);
    return matches ? matches[1] : '';
  }

  async loadImages() {
    const imageUrls = await this.imagesService.getImages();

    //el imageUrls contiene  
    const fileNames = imageUrls.map(url => {
      const parts = url.split('/');
      return parts[parts.length - 1];
    });

    console.log(fileNames);

    this.getSignedUrls(fileNames).subscribe(
      urls => this.images = urls,
      error => console.error('Error getting signed URLs:', error)
    );

  }

  getSignedUrls(paths: string[]): Observable<string[]> {
    const urlObservables = paths.map(path => this.imagesService.getSignedUrl(path));
    return forkJoin(urlObservables);
  }

}
