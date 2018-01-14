import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import  { UserService } from '../_services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: UserService,
        private router: Router
    ) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.authService.isLoggedIn       // {1}
            .take(1)                               // {2}
            .map((isLoggedIn: boolean) => {        // {3}
                if (localStorage.getItem('currentUser')) {
                    // logged in so return true
                    return true;
                }
                this.router.navigate(['/login']);
                /*if (!isLoggedIn){
                    this.router.navigate(['/login']);  // {4}
                    return false;
                }*/

                return false;
            });
    }
}
