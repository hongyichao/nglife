import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authStatus = false;
  hasAttemptedLogin = false;
  constructor(private router: Router, private userService: UserService) {

   }

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  });

  ngOnInit() {
  }

  onLoginSubmitted() {
    console.log(this.loginForm.value);
    this.hasAttemptedLogin = true;
    const loginDetails = this.loginForm.value;
    this.authStatus = this.userService.login(loginDetails.email, loginDetails.password);

    if(this.authStatus) {
      this.router.navigate(['/myprofile/' + loginDetails.email]);
    }
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }
}
