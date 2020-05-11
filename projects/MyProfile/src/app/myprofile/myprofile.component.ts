import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor() { }

  tmpAttributes: string[] = ['test1','test2','test3'];

  profileForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    attributes: new FormArray([])
  });

  ngOnInit() {
    for(let a of this.tmpAttributes) {
      (<FormArray>this.profileForm.get('attributes')).push(new FormControl(a));
    }
  }

  get attributes() {
    return (this.profileForm.get('attributes') as FormArray).controls;
  }

  onUpdateSubmitted() {
    console.log(this.profileForm);
  }

  onAddAttribute() {
    (<FormArray>this.profileForm.get('attributes')).push(new FormControl('test101'));
  }
}
