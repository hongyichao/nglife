import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared_model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() theUser: User;
  @Input() status: string;
  linkText: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if (this.status === 'active') {
      this.linkText = 'set to inactive';
    } else {
      this.linkText = 'set to active';
    }
  }

  changeStatus() {
    if (this.status === 'active') {
      this.userService.changeUserStatus(this.theUser, 'deactivate');
    } else {
      this.userService.changeUserStatus(this.theUser, 'activate');
    }
  }
}
