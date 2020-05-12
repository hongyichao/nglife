import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserSignUp } from '../shared-model/userSignUp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onUserSignUp(userSignUp: NgForm) {
    console.log(userSignUp.form.value);

    const newUser: UserSignUp = {
      FirstName: userSignUp.form.value.fName,
      LastName: userSignUp.form.value.lName,
      Email: userSignUp.form.value.email,
      Password: userSignUp.form.value.password,
    };

    this.userService.addUser(newUser);
    this.redirectToLogin();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
