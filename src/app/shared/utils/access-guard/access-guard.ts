import {inject} from '@angular/core';
import {AuthService} from '../../../modules/auth/services/auth.service';
import {Router, UrlTree} from '@angular/router';

export  const canActivateAuth = (): boolean | UrlTree => {
  const isLoggedIn = inject(AuthService).isAuth
  return isLoggedIn ? true : inject(Router).createUrlTree(['/login'])
}
