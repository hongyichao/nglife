import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { User } from './shared_model/user';
import { Subscription} from 'rxjs';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'UserService';
  activeUsers: User[];
  inactiveUsers: User[];
  logs: string[];
  constructor(private userService: UserService, private logService: LogService) {
  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.logs = this.logService.userLog;
  }

  ngOnDestroy() {
  }
}
