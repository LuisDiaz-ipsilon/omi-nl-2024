// archivos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Asegúrate de importar HttpHeaders
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArchivosService {
  private apiUrl = environment.archivosSiteURL;

  constructor(private http: HttpClient) {}

 // Método para subir archivos
 uploadFile(file: File): Observable<any> {
  const url = `${this.apiUrl}/upload`;
  const formData: FormData = new FormData();
  formData.append('file', file);

  const headers = this.getAuthHeaders();

  return this.http.post(url, formData, { headers });
}

// Método para obtener los archivos del usuario
getMyFiles(): Observable<any> {
  const url = `${this.apiUrl}/my-files`;
  const headers = this.getAuthHeaders();

  return this.http.get(url, { headers });
}

// Método para descargar un archivo
downloadFile(id: string): Observable<Blob> {
  const url = `${this.apiUrl}/download/${id}`;
  const headers = this.getAuthHeaders();

  return this.http.get(url, { headers, responseType: 'blob' });
}

// Método para obtener los headers de autenticación
private getAuthHeaders(): HttpHeaders {
  const token = localStorage.getItem('token'); // Asegúrate de que el token se almacena bajo 'token'
  return new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
}
}
