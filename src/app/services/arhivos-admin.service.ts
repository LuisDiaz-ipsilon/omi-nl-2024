import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArhivosAdminService {
  private apiUrl = environment.archivosSiteURL;


  constructor(private http: HttpClient) { }

  getFiles(): Observable<any> {
    const url = `${this.apiUrl}/files-by-admin`;
    const headers = this.getAuthHeaders();
  
    return this.http.get(url, { headers });
  }

  getUserData(email: string): Observable<any> {
    const url = `${this.apiUrl}/${email}`;
    const headers = this.getAuthHeaders();

    return this.http.get(url, { headers }); 
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Asegúrate de que el token se almacena bajo 'token'
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
