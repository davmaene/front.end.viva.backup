import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ForAuthService} from './for-auth.service';
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private forAuthService: ForAuthService, private route: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('currentSession')) {
      // user exist
      return true;
    }else {
      this.route.navigate(['/case-cnx-route/not-allowed']);
    }
  }
}
