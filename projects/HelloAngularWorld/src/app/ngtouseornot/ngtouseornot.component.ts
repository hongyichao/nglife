import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtouseornot',
  templateUrl: './ngtouseornot.component.html',
  styleUrls: ['./ngtouseornot.component.css']
})
export class NgtouseornotComponent implements OnInit {
  toUseAngular = true;
  clickCount = 0;
  clickCountList: number[] = [];
  constructor() { }

  ngOnInit() {
  }

  useOrNotToUseAngular() {
    this.toUseAngular = (this.toUseAngular) ? false : true;
    this.clickCount++;
    console.log(this.clickCount);

    this.clickCountList.push(this.clickCount);
  }
}
