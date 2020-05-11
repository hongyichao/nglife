import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  });

  ngOnInit() {
  }

  onLoginSubmitted() {
    console.log(this.loginForm.value);

  }

}
