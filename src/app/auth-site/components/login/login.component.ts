import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  log: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router ) {
    // Inicialización del formulario reactivo
    this.log = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.log.valid) {
      console.log('Login ...', this.log.value);
      this.router.navigateByUrl('/examenes');
      // Aquí podrías agregar la lógica de autenticación
    }
  }
}
