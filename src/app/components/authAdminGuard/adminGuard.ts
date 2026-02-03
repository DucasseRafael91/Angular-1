import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/Authentification/auth-service';
import { inject } from '@angular/core';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin()) {
    console.log('Access granted to admin route.');
    return true;
  } else {
    console.log('Access denied. Redirecting to trainings page.');
    router.navigate(['/trainings']);
    return false;
  }
};
