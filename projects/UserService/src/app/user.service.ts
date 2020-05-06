import { Injectable, OnInit } from '@angular/core';
import { User } from './shared_model/user';
import { Subject, BehaviorSubject } from 'rxjs';
import { LogService } from './log.service';

@Injectable()
export class UserService {
  activeUsers: User[] = [
    {Id : 1, Name : 'Terry1'},
    {Id : 2, Name : 'Terry2'},
    {Id : 3, Name : 'Terry3'}
  ];
  inactiveUsers: User[] = [
    {Id : 4, Name : 'Terry4'},
    {Id : 5, Name : 'Terry5'},
    {Id : 6, Name : 'Terry6'}
  ];

  constructor(private logService: LogService) {}

  changeUserStatus(user: User, action: string) {
    if (action === 'activate') {
      const index = this.inactiveUsers.findIndex(s => s.Id === user.Id);
      this.inactiveUsers.splice(index, 1);
      this.activeUsers.push(user);
      this.logService.addLog(user.Name + ' is activated');
    } else {
      const index = this.activeUsers.findIndex(s => s.Id === user.Id);
      this.activeUsers.splice(index, 1);
      this.inactiveUsers.push(user);
      this.logService.addLog(user.Name + ' is deactivated');
    }
  }
}
