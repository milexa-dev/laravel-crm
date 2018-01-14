import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['../app.component.css', './accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(
      private user: UserService
  ) { }

  ngOnInit() {
  }

}
