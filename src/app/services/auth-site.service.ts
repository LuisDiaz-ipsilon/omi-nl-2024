import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthSiteService {

  private apiUrl = environment.authSiteURL;

  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo usuario
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new`, userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Método para iniciar sesión
  login(credentials: { email: string, pass: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.userName); // Asegúrate de que 'userName' es parte de la respuesta
          localStorage.setItem('roles', JSON.stringify(response.roles)); // Almacenar los roles
        }
      })
    );
  }

  // Método para renovar el token
  renewToken(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/renew`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  // Método para verificar si el usuario está logueado
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    return !!token; // Devuelve true si el token existe, false si no
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getEscolaridad(): string | null {
    return localStorage.getItem('schoolLevel');
  }

  getRoles(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
  }
}
