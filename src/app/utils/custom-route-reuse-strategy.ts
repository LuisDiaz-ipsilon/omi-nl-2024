import {
  RouteReuseStrategy,
  DetachedRouteHandle,
  ActivatedRouteSnapshot,
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // No se debe almacenar ninguna ruta
    return false;
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {
    // No almacenar nada
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // No se debe reutilizar ninguna ruta
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // No se debe recuperar ninguna ruta
    return null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    // Siempre devolver falso para forzar la destrucción del componente
    return false;
  }
}
