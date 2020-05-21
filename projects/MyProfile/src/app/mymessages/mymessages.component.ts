import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymessages',
  templateUrl: './mymessages.component.html',
  styleUrls: ['./mymessages.component.css']
})
export class MymessagesComponent implements OnInit {
  myMessages: string[] = [];
  constructor() { }

  ngOnInit() {
    this.myMessages.push('test1');
    this.myMessages.push('test2');
    this.myMessages.push('test3');
    this.myMessages.push('test4');
    this.myMessages.push('test5');
    this.myMessages.push('test6');
    this.myMessages.push('test7');
    this.myMessages.push('test8');
    this.myMessages.push('test9');
    this.myMessages.push('test10');
  }

}
