import { Injectable } from '@angular/core';
import { UserSignUp } from './shared-model/userSignUp';
import { UserProfile } from './shared-model/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSignUps: UserSignUp[];
  userProfiles: UserProfile[];
  constructor() { }
}
