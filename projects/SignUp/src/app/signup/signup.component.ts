import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user-register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('userSignUpForm', {static : true}) userRegistration: NgForm;
  theUser: User;
  mode: string;

  constructor(private auth: AuthService, private route: ActivatedRoute) {

  }

  ngOnInit() {
      let userId = this.route.snapshot.params['id'];
      if (userId !== 'create') {
        this.mode = 'edit';

        this.theUser = this.auth.getUserById(+userId);
      } else {
        this.mode = 'create';
        this.theUser = {Id: -1, FirstName:'', LastName:'', Email:'', Password:''};
      }

      this.route.params.subscribe(data => {
        userId = data['id'];
        if (userId !== 'create') {
          this.mode = 'edit';
          this.theUser = this.auth.getUserById(+userId);
        } else {
          this.mode = 'create';
          this.theUser = {Id: -1, FirstName:'', LastName:'', Email:'', Password:''};
        }
      });

  }

  onUserSignUpFormSubmited() {
    console.log(this.userRegistration.form.value);
    if (this.mode === 'create') {
      const newUser = this.userRegistration.form.value;
      this.auth.addUser(newUser);
    } else {
      const editeUser = this.userRegistration.form.value;

      this.theUser.FirstName = editeUser.FirstName;
      this.theUser.LastName = editeUser.LastName;
      this.theUser.Email = editeUser.Email;
      this.theUser.Phone = editeUser.Phone;
      this.theUser.Password = editeUser.Password;
      this.theUser.Gender = editeUser.Gender;

      this.auth.updateUser(this.theUser);
    }

    this.userRegistration.reset();
  }

  OnResetForm() {
    this.userRegistration.reset();
  }
}
