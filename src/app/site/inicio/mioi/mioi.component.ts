import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-mioi',
  templateUrl: './mioi.component.html',
  styleUrls: ['./mioi.component.scss'],
})
export class MioiComponent implements OnInit {
  title = 'México en la Olimpiada de Informática';
  description = `
    México ha tenido una destacada participación en la Olimpiada Internacional de Informática (IOI),
    donde jóvenes talentos de todo el país compiten en diversas pruebas de programación y resolución de problemas.
    La IOI es uno de los concursos de informática más prestigiosos del mundo, y México ha demostrado su capacidad
    para formar a algunos de los mejores programadores jóvenes. A lo largo de los años, los estudiantes mexicanos
    han ganado varias medallas, reflejando el alto nivel educativo y la dedicación en el ámbito de la informática.
  `;

  content: string = 'Texto prueba';

  constructor() {}

  ngOnInit(): void {
  }
}
