import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-compaigns',
  templateUrl: './compaigns.component.html',
  styleUrls: ['../app.component.css', './compaigns.component.css']
})
export class CompaignsComponent implements OnInit {

  constructor(
      private user: UserService
  ) { }

  ngOnInit() {
  }

}
