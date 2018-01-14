import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../app.component.css', './tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
      private user:UserService
  ) {}

  ngOnInit() {
  }

}
