import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import Content from '../interfaces/content.interface';
import { DocumentReference, addDoc, collection, doc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  // Creamos un BehaviorSubject para manejar el estado del contenido
  private contentSource = new BehaviorSubject<string>('TEST');
  // Observable que otros componentes pueden suscribirse para obtener el contenido actual
  currentContent = this.contentSource.asObservable();

  constructor(private firestore: Firestore) {}

  getContent(): Observable<Content[]> {
    const textRef = collection(this.firestore, 'contents');
    return collectionData(textRef, { idField: 'id' }) as Observable<Content[]>;
  }

  getContentById(id: string): Observable<Content> {
    const contentDocRef = doc(this.firestore, `contents/${id}`);
    return docData(contentDocRef, { idField: 'id' }) as Observable<Content>;
  }

  updateContent(content: Content): Promise<void> {
    const contentDocRef = doc(this.firestore, `contents/${content.id}`);
    return updateDoc(contentDocRef, {
      nombre: content.nombre,
      contenido: content.contenido,
    });
  }

  addContent(content: Content): Promise<DocumentReference> {
    const contentRef = collection(this.firestore, 'contents');
    return addDoc(contentRef, content);
  }

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
