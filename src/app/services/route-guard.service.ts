import { SnackbarService } from './snackbar.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(
    public auth: AuthService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];

    const token: any = localStorage.getItem('token');

    var tokenPayload: any;

    try {
      tokenPayload = jwt_decode(token);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }

    let expectedRole = '';
    console.log(expectedRoleArray);
    console.log(tokenPayload);

    for (let i = 0; i < expectedRoleArray['length']; i++) {
      if (expectedRoleArray[i] == tokenPayload.role) {
        expectedRole = tokenPayload.role;
      }
    }

    if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
      console.log('ENTROU NO USER OU ADMIN TOKENPAYLOAD');
      if (this.auth.isAuthenticated() && tokenPayload.role == expectedRole) {
        console.log('ENTROU NO USER OU ADMIN AUTENTICADO');
        return true;
      }
      this.snackbarService.openSnackbar(
        GlobalConstants.unauthorized,
        GlobalConstants.error
      );
      this.router.navigate(['/casa-thalia-decor/dashboard']);
      return false;
    } else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }
}
