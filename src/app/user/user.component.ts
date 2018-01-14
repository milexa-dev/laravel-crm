import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../app.component.css', './user.component.css']
})

export class UserComponent {
  public modalRef: BsModalRef;
  config = {
    animated: true,
    backdrop: 'static',
    keyboard: false,
    ignoreBackdropClick: false
  };
  constructor(
      private modalService: BsModalService,
      private user:UserService
  ) {}

  public openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, this.config);
  }
}
