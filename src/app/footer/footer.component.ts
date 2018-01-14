import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import  { UserService } from '../_services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  constructor(
      private user: UserService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.user.isLoggedIn;
  }

}
