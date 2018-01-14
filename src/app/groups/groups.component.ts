import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['../app.component.css', './groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(
      private user:UserService
  ) {}

  ngOnInit() {
  }

}
