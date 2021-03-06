import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router } from '@angular/router';
import { AuthService } from './index';
import {NavigationService} from '../../core/services';


@Injectable()
export class DashboardGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService, private navService: NavigationService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean  {
    return this.authService.hasCredentials;

  }

  canLoad(route: Route): boolean {
    if (!this.authService.hasCredentials) {
      this.navService.goToHome();
      return false;
    } else {
      return true;
    }
  }

}
