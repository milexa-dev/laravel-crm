import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['../app.component.css', './files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(
      private user: UserService
  ) { }

  ngOnInit() {
  }

}
