import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSiteService } from 'src/app/services/auth-site.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  log: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private authService: AuthSiteService
  ) {
    // Inicialización del formulario reactivo
    this.log = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  } 

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.log.valid) {
      // Crear un objeto con las credenciales basado en los valores del formulario
      const credentials = {
        email: this.log.value.email,
        pass: this.log.value.password
      };
  
      // Llamar al servicio de autenticación con el objeto de credenciales
      this.authService.login(credentials).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Almacena el token si es necesario
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.userName);
          localStorage.setItem('schoolLevel', response.schoolLevel);
          // Redirigir al dashboard o página deseada después del inicio exitoso
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed', error);
          alert('Error: Email o contraseña incorrectos. Por favor, intenta de nuevo.');
        }
      );
    } else {
      // Si el formulario no es válido, mostrar un mensaje o marcar los campos como necesarios
      console.log('Formulario no válido');
    }
  }
  
}
