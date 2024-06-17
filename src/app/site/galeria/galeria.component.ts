import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  images = [
    { src: 'https://via.placeholder.com/800x400?text=Image+1', alt: 'Image 1', caption: 'Caption 1' },
    { src: 'https://via.placeholder.com/800x400?text=Image+2', alt: 'Image 2', caption: 'Caption 2' },
    { src: 'https://via.placeholder.com/800x400?text=Image+3', alt: 'Image 3', caption: 'Caption 3' },
    { src: 'https://via.placeholder.com/800x400?text=Image+4', alt: 'Image 4', caption: 'Caption 4' },
    { src: 'https://via.placeholder.com/800x400?text=Image+5', alt: 'Image 5', caption: 'Caption 5' },
    { src: 'https://via.placeholder.com/800x400?text=Image+6', alt: 'Image 6', caption: 'Caption 6' },
    { src: 'https://via.placeholder.com/800x400?text=Image+7', alt: 'Image 7', caption: 'Caption 7' },
    { src: 'https://via.placeholder.com/800x400?text=Image+8', alt: 'Image 8', caption: 'Caption 8' }
  ];

}
