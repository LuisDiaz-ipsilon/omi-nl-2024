import { Component } from '@angular/core';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.scss'],
})
export class ConvocatoriaComponent {
  registrarse() {
    window.location.href = 'https://forms.gle/CAC7dw1wtC2PEwD96';
  }
}
