import { Component } from '@angular/core';

@Component({
  selector: 'app-nln',
  templateUrl: './nln.component.html',
  styleUrls: ['./nln.component.scss']
})
export class NlnComponent {
  title = 'Olimpiada Nacional de Informática';
  description = `
    Nuevo León ha sido un participante destacado en la Olimpiada Nacional de Informática (ONI), 
    demostrando constantemente un alto nivel de competencia y habilidades en el ámbito de la programación 
    y resolución de problemas. La ONI es un evento anual que reúne a jóvenes talentos de todo México para 
    competir en diversas pruebas de informática, poniendo a prueba sus conocimientos y habilidades técnicas.
  `;
}
