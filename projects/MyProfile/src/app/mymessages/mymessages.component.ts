import { Component, OnInit, Input } from '@angular/core';
import { MyMessage } from '../shared-model/myMessage';

@Component({
  selector: 'app-mymessages',
  templateUrl: './mymessages.component.html',
  styleUrls: ['./mymessages.component.css']
})
export class MymessagesComponent implements OnInit {
  @Input() myMessages: MyMessage[];
  constructor() { }

  ngOnInit() {

  }

  onAddMessage() {
    console.log("adding...");
    this.myMessages.push({Id: 1, Text: 'test123', Timestamp: '2020-05-10'});
    console.log(this.myMessages);
  }
}
