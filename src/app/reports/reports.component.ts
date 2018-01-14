import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['../app.component.css', './reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(
      private user:UserService
  ) {}

  ngOnInit() {
  }

}
