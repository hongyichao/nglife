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
  activeMessage: MyMessage;
  myMessages: MyMessage[] = [];

  constructor() {
    const myProfileUsers = sessionStorage.getItem('myProfileUsers');
    this.userProfiles = myProfileUsers ? JSON.parse(myProfileUsers) : [];
   }

   addUserMessage(msgText: string, timestamp: string): number {
    const msgId = this.myMessages.length > 0 ? this.myMessages[this.myMessages.length - 1].Id + 1 : 1;
    this.myMessages.push({Id: msgId, Text: msgText, Timestamp: timestamp});
    console.log("msgCount: " + this.myMessages.length);
    return msgId;
   }

   getUserMessage(msgId: number): MyMessage {
    if (this.myMessages.length > 0) {
      const msg = this.myMessages.find(m => m.Id === msgId);
      console.log(msg);
      return msg;
    }
   }

   updateUserMessage(updatedMsg: MyMessage) {
    if (this.myMessages.length > 0) {
      const index = this.myMessages.findIndex(m => m.Id === updatedMsg.Id);
      this.myMessages.splice(index, 1, updatedMsg);
    }
   }

  updateUserById(theUser: UserProfile) {
    theUser.Messages = this.myMessages;
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
      this.myMessages = theUser.Messages;
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
