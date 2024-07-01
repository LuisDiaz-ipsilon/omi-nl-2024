import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  images = [
    'https://vidauniversitaria.uanl.mx/wp-content/uploads/2023/11/premiacion-certamen-altares-muertos-7.jpg',
    'https://wp.uaslp.mx/noticias/wp-content/uploads/sites/5/2022/07/I-Concurso-Estatal-Fisica-Matematicas-1024x683.jpg',
    'https://vidauniversitaria.uanl.mx/wp-content/uploads/2021/12/alumnos-cideb-prepa7-primeros-lugares-olimpiada-nacional-biologia-10-1.jpg',
    'https://www.uanl.mx/wp-content/uploads/2018/12/extra-alumnoos-y-maestros-en-un-curso.jpg',
  ];
  currentIndex = 0;

  previousImage(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
