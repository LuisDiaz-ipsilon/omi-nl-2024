import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthSiteService } from '../services/auth-site.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthSiteService);
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
