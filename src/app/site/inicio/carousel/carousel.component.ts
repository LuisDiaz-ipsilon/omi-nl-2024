import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
    'https://via.placeholder.com/800x400?text=Image+4'
  ];
  currentIndex = 0;

  previousImage(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
