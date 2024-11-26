import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ImageAdminBENest, ImageObject, ImagesData } from 'src/app/interfaces/imagesData.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ImagesService } from 'src/app/services/images.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit{

  images: any[] = [];
  

  constructor(
    private imagesService: ImagesService, 
    private authService: AuthService) 
  {

  }
  
  ngOnInit() {
    this.loadImages();
  }

  /**
   * Cargar todas las imágenes de la galería.
   */
  loadImages() {
    this.imagesService.getImages().subscribe(
      (images) => {
        this.images = images;
        console.log(this.images)
      },
      (error) => {
        console.error('Error al cargar imágenes:', error);
      }
    );
  }

  /**
   * Obtener la URL de la imagen para mostrarla.
   * @param image Imagen a mostrar.
   */
  getImageUrl(image: ImageAdminBENest): string {
    return `${environment.imagesSiteStaticURL}/${image.path}`; //este es diferente por usar los archivos estaticos declarados por backend
  }

}
