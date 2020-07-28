import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../service/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private helper: JwtHelperService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    const isExpireToken = this.helper.isTokenExpired(currentUser);
    if (currentUser && !isExpireToken) {
      // logged in so return true
      //console.log(currentUser);

      return true;

    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/connexion'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}