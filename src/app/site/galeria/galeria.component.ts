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
      src: 'https://abcnoticias.mx/u/fotografias/m/2023/6/30/f960x540-214283_288358_4638.png',
      alt: 'Image 8',
      caption: 'Evento 16',
    },
  ];
}
