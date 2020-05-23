import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { MyMessage } from '../shared-model/myMessage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mymessage',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.css']
})
export class MymessageComponent implements OnInit {
  myMessage: MyMessage = {Id: -1, Text: '', Timestamp: ''};
  editMode = 'add';
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    const msgId = this.route.snapshot.params['id'];
    if (msgId) {
      this.editMode = 'update';
      this.myMessage = this.userService.getUserMessage(+msgId);
      if (!this.myMessage) {
        this.editMode = 'add';
        this.myMessage = {Id: -1, Text: '', Timestamp: ''};
      }
    }

    this.route.params.subscribe(params => {
      this.myMessage = this.userService.getUserMessage(+params['id']);
      if (!this.myMessage) {
        this.editMode = 'add';
        this.myMessage = {Id: -1, Text: '', Timestamp: ''};
      } else {
        this.editMode = 'update';
      }
    });

  }

  onProcessMessage(msgForm: NgForm) {
    if (this.editMode === 'add') {
      const timestamp = this.getDateTimeStr();
      const text = msgForm.value.msgText;
      const newId = this.userService.addUserMessage(text, timestamp);
      // this.myMessage.Id = newId;
      // this.myMessage.Text = text;
      // this.myMessage.Timestamp = timestamp;

      this.router.navigate([newId], { relativeTo: this.route });

    } else {
      const text = msgForm.value.msgText;
      this.myMessage.Text = text;
      this.userService.updateUserMessage(this.myMessage);
    }
    this.editMode = 'update';
  }

  getDateTimeStr() {
    const d = new Date();
    return d.getFullYear()
    + '-' + (((d.getMonth() + 1) < 10) ? '0' : '') + (d.getMonth() + 1)
    + '-' + ((d.getDate() < 10) ? '0' : '') + d.getDate()
    + ' ' + ((d.getHours() < 10) ? '0' : '') + d.getHours()
    + ':' + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes()
    + ':' + ((d.getSeconds() < 10) ? '0' : '') + d.getSeconds();
  }
}
