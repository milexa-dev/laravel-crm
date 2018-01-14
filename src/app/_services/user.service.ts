import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../_models/user';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  public token: string;

  get isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn = new BehaviorSubject<boolean>(true);
    }
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
      private router: Router,
      private http: HttpClientModule
  ) {

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;

  }

  login(user: User){
    if (user.userName !== '' && user.password != '' ) {
      localStorage.setItem('currentUser', JSON.stringify({ username: user.userName}));
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');

    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
