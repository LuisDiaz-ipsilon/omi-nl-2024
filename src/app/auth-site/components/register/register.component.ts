import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastNameP: ['', [Validators.required]],
      lastNameM: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      school: ['', [Validators.required]],
      schoolLevel: ['', [Validators.required]],
      schoolYear: ['', [Validators.required]],
      bachilleratoType: ['', []], // Este solo se usa si el nivel escolar es "bachillerato"
      birthdate: ['', [Validators.required]],
      omegaupUser: ['', [Validators.required]]
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
      console.log('Formulario de registro:', this.registerForm.value);
      this.router.navigateByUrl('/examenes');
      // Aquí podrías agregar la lógica para enviar los datos al servidor
    } else {
      console.error('Formulario no válido');
      this.router.navigateByUrl('/examenes');
    }
  }
}
