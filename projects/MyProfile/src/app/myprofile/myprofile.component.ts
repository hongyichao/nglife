import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../shared-model/userProfile';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  theUser: UserProfile;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  tmpAttributes: string[] = ['test1','test2','test3'];

  profileForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    attributes: new FormArray([])
  });

  ngOnInit() {
    const userEmail = this.route.snapshot.params['email'];
    this.theUser = this.userService.getUserByEmail(userEmail);

    console.log(this.theUser);

    if(!this.theUser){
      this.theUser = {Id:999, FirstName:'test', LastName:'test', Email:'test', Password:'test'}
    }

    for(let a of this.theUser.Attributes) {
      (<FormArray>this.profileForm.get('attributes')).push(new FormControl(a, Validators.required));
    }
  }

  get attributes() {
    return (this.profileForm.get('attributes') as FormArray).controls;
  }

  onUpdateSubmitted() {

    if(this.profileForm.status === "VALID") {
      console.log(this.profileForm.value);
      this.theUser.FirstName = this.profileForm.value.firstName;
      this.theUser.LastName = this.profileForm.value.lastName;
      this.theUser.Email = this.profileForm.value.email;
      this.theUser.Attributes = this.profileForm.value.attributes;
      this.userService.updateUserById(this.theUser);
    }
    else {
      console.log(this.profileForm);
    }
  }

  onAddAttribute() {
    (<FormArray>this.profileForm.get('attributes')).push(new FormControl(null, Validators.required));
  }

  validateAttribute(index) {
    const theAttribute = (<FormArray>this.profileForm.get('attributes')).at(index);
    if (theAttribute.status === 'INVALID' && theAttribute.touched) {
      return false;
    }
    return true;
  }
}
