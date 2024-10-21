import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createUser } from 'src/app/interfaces/create-user.interface';
import { AuthSiteService } from 'src/app/services/auth-site.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthSiteService) { // Inyectar el servicio de autenticación
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastNameP: ['', [Validators.required]],
      lastNameM: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pass: [''],
      school: ['', [Validators.required]],
      schoolLevel: ['', [Validators.required]],
      schoolYear: ['', [Validators.required]],
      bachilleratoType: ['', []], // Este solo se usa si el nivel escolar es "bachillerato"
      birthdate: ['', [Validators.required]],
      omegaupUser: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Escuchar cambios en el nivel escolar para mostrar/ocultar el campo "bachilleratoType"
    this.registerForm.get('schoolLevel')?.valueChanges.subscribe(value => {
      if (value === 'bachillerato') {
        this.registerForm.get('bachilleratoType')?.setValidators([Validators.required]);
      } else {
        this.registerForm.get('bachilleratoType')?.clearValidators();
      }
      this.registerForm.get('bachilleratoType')?.updateValueAndValidity();
    });
  }

  get isBachillerato(): boolean {
    return this.registerForm.get('schoolLevel')?.value === 'bachillerato';
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      // Crear el objeto con el formato esperado por la API
      const userData : createUser= {
        firstName: formData.firstName?.trim(),
      lastNameP: formData.lastNameP?.trim(),
      lastNameM: formData.lastNameM?.trim(),
      email: formData.email?.toLowerCase().trim(),
      school: formData.school?.trim(),
      schoolLevel: formData.schoolLevel,
      schoolYear: Number(formData.schoolYear),
      bachilleratoType: formData.bachilleratoType || undefined,
      birthDate: new Date(formData.birthdate),
      omegaUser: formData.omegaupUser?.trim(),
      pass: formData.password,
      roles: ['user']
      };
      
      // Llamar al servicio de autenticación para registrar al usuario
      this.authService.register(userData).subscribe(
        (response) => {
          console.log('Registro exitoso', response);
          // Redirigir al usuario después del registro exitoso
          this.router.navigateByUrl('/examenes');
        },
        (error) => {
          console.error('Error en el registro', error);
          alert('Hubo un problema al registrarse. Por favor, intenta de nuevo.');
        }
      );
    } else {
      console.error('Formulario no valido');
      console.log(this.registerForm);
    }
  }
}
