import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  ngOnInit() {
  }
  onUpdateSubmitted() {
    console.log(this.profileForm);
  }
}
