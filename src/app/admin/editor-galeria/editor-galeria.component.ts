import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { image } from 'ngx-editor/schema/nodes';
import { forkJoin, Observable } from 'rxjs';
import { ImageBENest } from 'src/app/interfaces/ImageBackEndOmi';
import { ImageAdminBENest } from 'src/app/interfaces/imagesData.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ImagesService } from 'src/app/services/images.service';
import { environment } from 'src/environments/environment';

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
  uploadForm: FormGroup;
  uploadError: string | null = null;

  images: ImageAdminBENest[] = [];

  imagesDowload: any [] = [];

  constructor(
    private imagesService: ImagesService,
    private fb: FormBuilder
  ) { 
    this.uploadForm = this.fb.group({
      file: [Validators.required],
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    this.loadImages();
  }

  /**
   * Manejar la selección de archivo desde el input.
   * @param event Evento del input file.
   */
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        file: file
      });
      this.uploadForm.get('file')?.updateValueAndValidity();
    }
  }

  /**
   * Manejar la subida del formulario.
   */
  uploadImage() {
    if (this.uploadForm.invalid) {
      this.uploadError = 'Por favor, completa todos los campos requeridos.';
      return;
    }

    const file: File = this.uploadForm.get('file')?.value;
    const title: string = this.uploadForm.get('title')?.value;
    const description: string = this.uploadForm.get('description')?.value;

    this.imagesService.uploadImage(file, title, description).subscribe(
      (image) => {
        this.uploadError = null;
        this.images.push(image);
        alert('Imagen subida exitosamente');
        this.uploadForm.reset();
      },
      (error) => {
        console.error('Error uploading image:', error);
        this.uploadError = 'Error al subir la imagen';
      }
    );
  }

  /**
   * Eliminar una imagen de la galería.
   * @param image Imagen a eliminar.
   */
  deleteImage(image: ImageAdminBENest) {
    if (confirm('¿Está seguro de que desea eliminar esta imagen?')) {
      this.imagesService.deleteImage(image.id).subscribe(
        () => {
          this.images = this.images.filter(img => img.id !== image.id);
          alert('Imagen eliminada exitosamente');
        },
        (error) => {
          console.error('Error deleting image:', error);
          alert('Error al eliminar la imagen');
        }
      );
    }
  }

  /**
   * Cargar todas las imágenes de la galería.
   */
  loadImages() {
    this.imagesService.getImages().subscribe(
      (images) => {
        this.images = images;
      },
      (error) => {
        console.error('Error loading images:', error);
      }
    );
  }

  /**
   * Obtener la URL de la imagen para mostrarla.
   * @param image Imagen a mostrar.
   */
  getImageUrl(image: ImageAdminBENest): string {
    return `${environment.imagesSiteStaticURL}/${image.path}`;
  }

}
