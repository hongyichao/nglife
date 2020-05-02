import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngisbad',
  templateUrl: './ngisbad.component.html',
  styleUrls: ['./ngisbad.component.css']
})
export class NgisbadComponent implements OnInit {
  ngbadreason: string = "";

  constructor() {

   }

  ngOnInit() {
  }

  onRestReasonClick()
  {
    this.ngbadreason = "";
  }
}
