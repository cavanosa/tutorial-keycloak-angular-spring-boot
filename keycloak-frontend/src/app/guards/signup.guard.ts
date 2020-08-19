import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.getIsLogged()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
