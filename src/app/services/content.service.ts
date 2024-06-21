import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private contentSource = new BehaviorSubject<string>('');
  currentContent = this.contentSource.asObservable();

  updateContent(content: string): void {
    this.contentSource.next(content);
  }

  constructor() {}

  private _titleNln = 'Olimpiada Nacional de Informática';
  private _descriptionNln = `
    Nuevo León ha sido un participante destacado en la Olimpiada Nacional de Informática (ONI),
    demostrando constantemente un alto nivel de competencia y habilidades en el ámbito de la programación
    y resolución de problemas. La ONI es un evento anual que reúne a jóvenes talentos de todo México para
    competir en diversas pruebas de informática, poniendo a prueba sus conocimientos y habilidades técnicas.
  `;

  updateContentNln(newTitle: string, newDescription: string): void {
    this._titleNln = newTitle;
    this._descriptionNln = newDescription;
  }

  getTitleNln(): string {
    return this._titleNln;
  }

  getDescriptionNln(): string {
    return this._descriptionNln;
  }
}
