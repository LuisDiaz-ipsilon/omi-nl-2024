import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ImageObject, ImagesData } from 'src/app/interfaces/imagesData.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit{

  images: any[] = [];
  

  constructor(private imagesService: ImagesService) {}
  
  ngOnInit() {
    this.loadImages();
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

    const imgObjects: ImageObject[] = this.transformUrlsToImageObjects(this.images);
    console.log(imgObjects);
    
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getSignedUrls(paths: string[]): Observable<string[]> {
    const urlObservables = paths.map(path => this.imagesService.getSignedUrl(path));
    return forkJoin(urlObservables);
  }

  transformUrlsToImageObjects(urls: string[]): ImageObject[] {
    return urls.map((url, index) => ({
      src: url,
      alt: `Image ${index + 1}`,
      caption: ' ',
    }));
  }

  /*images = [
    {
      src: ' ',
      alt: 'Image 1',
      caption: 'Evento 1',
    },
    {
      src: 'https://www.uanl.mx/wp-content/uploads/2018/09/celebracion-85-aniversario-uanl-comunidad-facultad-arquitectura.jpg',
      alt: 'Image 2',
      caption: 'Evento 2',
    },
    {
      src: 'https://lh4.googleusercontent.com/proxy/1XqoUM-VBf4jmREvJF9uohWTseca3v34FIv2D1OViegDlctQeJVliqeEKz8wEcGLwIkVEgYVa0EKF1NSD83iTMXvQgtlqxRXi7o9QBVWIHCitneq2O58fS1o-QMjqpu8Sam68mxpZoeudg9l6cKAwxPEuVv2uVwl-QeWbGlDmoSkoPzg76CpKyho0gt9IkP-gEQ',
      alt: 'Image 3',
      caption: 'Evento 3',
    },
    {
      src: 'https://lh4.googleusercontent.com/proxy/HiJL5MVBdqpGasAj0IEOfnH5jgoSr0RpWpcPkqfVqD7QIsjqwk-TjXVY_3nLsrMbhbv_p_gj-Afwn8KiMFfyKEEjtxEj_fwIyQiptRiRilGYwjWLaLE5miAynHkgtg',
      alt: 'Image 4',
      caption: 'Evento 4',
    },
    {
      src: 'https://www.uanl.mx/wp-content/uploads/2024/02/tigres-al-rescate-2023-dae-1.jpg',
      alt: 'Image 5',
      caption: 'Evento 5',
    },
    {
      src: 'https://www.uanl.mx/wp-content/uploads/2024/02/olimpiada-del-conocimiento-dae-1.jpg',
      alt: 'Image 6',
      caption: 'Evento 6',
    },
    {
      src: 'https://noticiasnuevoleon.com.mx/wp-content/uploads/2023/08/unimayo-e1692761421371-700x350.jpeg',
      alt: 'Image 7',
      caption: 'Evento 7',
    },
    {
      src: 'https://abcnoticias.mx/u/fotografias/m/2023/6/30/f960x540-214283_288358_4638.png',
      alt: 'Image 8',
      caption: 'Evento 8',
    },
    {
      src: 'https://www.uanl.mx/wp-content/uploads/2018/09/celebracion-85-aniversario-uanl-comunidad-facultad-arquitectura.jpg',
      alt: 'Image 2',
      caption: 'Evento 9',
    },
    {
      src: 'https://lh4.googleusercontent.com/proxy/1XqoUM-VBf4jmREvJF9uohWTseca3v34FIv2D1OViegDlctQeJVliqeEKz8wEcGLwIkVEgYVa0EKF1NSD83iTMXvQgtlqxRXi7o9QBVWIHCitneq2O58fS1o-QMjqpu8Sam68mxpZoeudg9l6cKAwxPEuVv2uVwl-QeWbGlDmoSkoPzg76CpKyho0gt9IkP-gEQ',
      alt: 'Image 3',
      caption: 'Evento 11',
    },
    {
      src: 'https://lh4.googleusercontent.com/proxy/HiJL5MVBdqpGasAj0IEOfnH5jgoSr0RpWpcPkqfVqD7QIsjqwk-TjXVY_3nLsrMbhbv_p_gj-Afwn8KiMFfyKEEjtxEj_fwIyQiptRiRilGYwjWLaLE5miAynHkgtg',
      alt: 'Image 4',
      caption: 'Evento 12',
    },
    {
      src: 'https://www.uanl.mx/wp-content/uploads/2024/02/tigres-al-rescate-2023-dae-1.jpg',
      alt: 'Image 5',
      caption: 'Evento 13',
    },
    {
      src: 'https://www.uanl.mx/wp-content/uploads/2024/02/olimpiada-del-conocimiento-dae-1.jpg',
      alt: 'Image 6',
      caption: 'Evento 14',
    },
    {
      src: 'https://noticiasnuevoleon.com.mx/wp-content/uploads/2023/08/unimayo-e1692761421371-700x350.jpeg',
      alt: 'Image 7',
      caption: 'Evento 15',
    },
    {
      src: 'https://ekanlpkfqhhnbnyzbxtc.supabase.co/storage/v1/object/sign/images/FB_IMG_1695165318500.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvRkJfSU1HXzE2OTUxNjUzMTg1MDAuanBnIiwiaWF0IjoxNzIxNzY0MzYzLCJleHAiOjIwMzcxMjQzNjN9.evpjmSCrnskq3MwiqaldUs7zM5nh3EZ5rPiTDqNDCws&t=2024-07-23T19%3A52%3A44.021Z',
      alt: 'Image 8',
      caption: 'Evento 16',
    },
  ];*/
}
