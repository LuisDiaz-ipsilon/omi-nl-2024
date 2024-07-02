import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  images = [
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 1',
      caption: 'Evento 1',
    },
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 2',
      caption: 'Evento 2',
    },
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 3',
      caption: 'Evento 3',
    },
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 4',
      caption: 'Evento 4',
    },
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 5',
      caption: 'Evento 5',
    },
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 6',
      caption: 'Evento 6',
    },
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 7',
      caption: 'Evento 7',
    },
    {
      src: 'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
      alt: 'Image 8',
      caption: 'Evento 8',
    },
  ];
}
