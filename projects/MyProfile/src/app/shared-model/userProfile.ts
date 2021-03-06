import { MyMessage } from './myMessage';

export class UserProfile {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Attributes?: string[];
  Messages?: MyMessage[];
}
