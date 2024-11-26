// src/app/services/images.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageBENest } from '../interfaces/ImageBackEndOmi';
import { ImageAdminBENest } from '../interfaces/imagesData.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private apiUrl = `${environment.imagesSiteURL}`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todas las imágenes de la galería.
   */
  getImages(): Observable<ImageBENest[]> {
    return this.http.get<ImageBENest[]>(`${this.apiUrl}`);
  }

  /**
   * Subir una nueva imagen a la galería.
   * @param file Archivo de imagen a subir.
   * @param title Título de la imagen (opcional).
   * @param description Descripción de la imagen (opcional).
   */
  uploadImage(file: File, title?: string, description?: string): Observable<ImageBENest> {

    const headers = this.getAuthHeaders();

    const formData = new FormData();
    formData.append('file', file);
    if (title) formData.append('title', title);
    if (description) formData.append('description', description);
    return this.http.post<ImageBENest>(`${this.apiUrl}/upload`, formData,  { headers });
  }

  /**
   * Eliminar una imagen de la galería.
   * @param id ID de la imagen a eliminar.
   */
  deleteImage(id: string): Observable<any> {

    const headers = this.getAuthHeaders();

    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  /**
   * Descargar una imagen específica.
   * @param id ID de la imagen a descargar.
   */
  downloadImage(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob' });
  }

  /**
   * Obtener todos los archivos como administrador.
   */
  getFilesByAdmin(): Observable<ImageAdminBENest[]> {
    return this.http.get<ImageAdminBENest[]>(`${this.apiUrl}/files-by-admin`);
  }

  /**
   * Obtener datos de un usuario por email.
   * @param email Email del usuario.
   */
  getUserData(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${email}`);
  }

    // Método para obtener los headers de autenticación
    private getAuthHeaders(): HttpHeaders {
      const token = localStorage.getItem('token'); // Asegúrate de que el token se almacena bajo 'token'
      return new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  
}
