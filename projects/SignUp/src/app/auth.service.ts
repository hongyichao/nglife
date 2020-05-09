import { Injectable } from '@angular/core';
import { User } from './user-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [{Id: 1, FirstName: 'John1', LastName: 'Z', Email: 'john1z@abc.com', Password: 'Password1'},
  {Id: 2, FirstName: 'John2', LastName: 'Z', Email: 'john2z@abc.com', Password: 'Password2'},
  {Id: 3, FirstName: 'John3', LastName: 'Z', Email: 'john3z@abc.com', Password: 'Password3'}
];
  constructor() { }

  addUser(newUser: User) {
    newUser.Id = this.users.length + 1;
    this.users.push(newUser);
  }

  updateUser(editedUser: User) {
    const userIndex = this.users.findIndex( u => u.Id === editedUser.Id);
    this.users.splice(userIndex, 1, editedUser);
  }

  getUserById(id: number) {
    return this.users.find( u => u.Id === id);
  }
}
