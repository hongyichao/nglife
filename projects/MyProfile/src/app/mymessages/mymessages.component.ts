import { Component, OnInit, Input } from '@angular/core';
import { MyMessage } from '../shared-model/myMessage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mymessages',
  templateUrl: './mymessages.component.html',
  styleUrls: ['./mymessages.component.css']
})
export class MymessagesComponent implements OnInit {
  @Input() myMessages: MyMessage[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.myMessages = this.userService.myMessages;

  }
}


