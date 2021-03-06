import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CustomerValidators } from '../customer.validators';

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
    email: new FormControl(null, [Validators.required, CustomerValidators.invalidUserName]),
    password: new FormControl(null, [Validators.required], CustomerValidators.asyncInvalidPassword)
  });

  ngOnInit() {
    let userSession = sessionStorage.getItem('userAuthSession');
    if(userSession) {
      const userAuthSession = JSON.parse(userSession);
      if(userAuthSession.Status === 'Valid') {
        this.router.navigate(['/myprofile/' + userAuthSession.Email]);
      }
    }
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
