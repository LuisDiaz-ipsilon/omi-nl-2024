import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

/**
 * Este guard es unicamente para cuando se ingresa a admin
 * no se usa para la authentificacion de usuarios.
 * @param route 
 * @param state 
 * @returns 
 */

export const authAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verificar si el usuario está autenticado
  if (authService.isLoggedIn()) {
    return true; // Permitir el acceso a la ruta
  } else {
    // Redirigir a la página de login o donde desees
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
