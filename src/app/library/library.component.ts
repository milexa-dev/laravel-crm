import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['../app.component.css', './library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(
      private user:UserService
  ) {}

  ngOnInit() {
  }

}
