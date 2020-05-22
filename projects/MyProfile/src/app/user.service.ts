import { Injectable } from '@angular/core';
import { UserSignUp } from './shared-model/userSignUp';
import { UserProfile } from './shared-model/userProfile';
import { AuthSession } from './shared-model/authSession';
import { MyMessage } from './shared-model/myMessage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = false;
  userProfiles: UserProfile[] = [];
  activeUserProfile: UserProfile;

  constructor() {
    const myProfileUsers = sessionStorage.getItem('myProfileUsers');
    this.userProfiles = myProfileUsers ? JSON.parse(myProfileUsers) : [];
   }

   getUserMessage(msgId: number): MyMessage {
    if (this.activeUserProfile) {
      if (this.activeUserProfile.Messages) {
        const msg = this.activeUserProfile.Messages.find(m => m.Id === msgId);
        return msg;
      }
    }
   }

  updateUserById(theUser: UserProfile) {

    let aUser: UserProfile = this.userProfiles.find(u=>u.Id === theUser.Id);
    console.log('before: '+ aUser);
    const index = this.userProfiles.findIndex(u=>u.Id === theUser.Id);

    this.userProfiles.splice(index,1,theUser);
    aUser = this.userProfiles.find(u=>u.Id === theUser.Id);
    console.log('after: ' + aUser);

    sessionStorage.setItem('myProfileUsers', JSON.stringify(this.userProfiles));
  }

  getUserByEmail(email: string) {
    const theUser = this.userProfiles.find(u => u.Email === email);
    if (theUser) {
      this.activeUserProfile = theUser;
    }
    return theUser;
  }

  addUser(newUser: UserSignUp) {
    const newUserProfile: UserProfile = {
      Id: this.userProfiles.length + 1,
      FirstName: newUser.FirstName,
      LastName: newUser.LastName,
      Email: newUser.Email,
      Password: newUser.Password,
      Attributes: [],
      Messages: []
    };

    this.userProfiles.push(newUserProfile);

    sessionStorage.setItem('myProfileUsers', JSON.stringify(this.userProfiles));
  }

  login(userName: string, password: string): boolean {
    if (this.userProfiles.length > 0) {
      const user: UserProfile = this.userProfiles.find(u => u.Email === userName);
      if (user) {
        if (user.Password === password) {
          this.isLoggedIn = true;
          const userSession: AuthSession = {
            Id: user.Id,
            Email: user.Email,
            Status: 'Valid'
          };
          sessionStorage.setItem('userAuthSession', JSON.stringify(userSession));
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
