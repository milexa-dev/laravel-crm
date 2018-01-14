import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['../app.component.css', './calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
      private user: UserService
  ) { }

  ngOnInit() {
  }

}
