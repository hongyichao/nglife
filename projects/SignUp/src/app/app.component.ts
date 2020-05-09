import { Component, OnInit } from '@angular/core';
import { User } from './user-register';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.users = this.auth.users;
  }

}
