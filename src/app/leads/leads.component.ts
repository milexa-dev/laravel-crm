import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['../app.component.css', './leads.component.css']
})
export class LeadsComponent implements OnInit {

  constructor(
      private user:UserService
  ) {}

  ngOnInit() {
  }

}
