import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import  { UserService } from '../_services/user.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(
      private user: UserService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.user.isLoggedIn;
  }

  onLogout(){
    this.user.logout();                      // {3}
  }
}
