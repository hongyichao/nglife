import { Injectable } from '@angular/core';
import { UserSignUp } from './shared-model/userSignUp';
import { UserProfile } from './shared-model/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = false;
  userProfiles: UserProfile[] = [];
  constructor() { }

  updateUserById(theUser: UserProfile) {

    let aUser: UserProfile = this.userProfiles.find(u=>u.Id === theUser.Id);
    console.log('before: '+ aUser);
    var index = this.userProfiles.findIndex(u=>u.Id === theUser.Id);

    this.userProfiles.splice(index,1,theUser);
    aUser = this.userProfiles.find(u=>u.Id === theUser.Id);
    console.log('after: ' + aUser);
  }

  getUserByEmail(email: string) {
    const theUser = this.userProfiles.find(u => u.Email === email);
    return theUser;
  }

  addUser(newUser: UserSignUp) {
    const newUserProfile: UserProfile = {
      Id: this.userProfiles.length + 1,
      FirstName: newUser.FirstName,
      LastName: newUser.LastName,
      Email: newUser.Email,
      Password: newUser.Password
    };

    this.userProfiles.push(newUserProfile);
  }

  login(userName: string, password: string): boolean {
    if (this.userProfiles.length > 0) {
      const user = this.userProfiles.find(u => u.Email === userName);
      if (user) {
        if (user.Password === password) {
          this.isLoggedIn = true;
          return true;
        } else {
          this.isLoggedIn = false;
          return false;
        }
      }
    }
    return false;
  }
}
