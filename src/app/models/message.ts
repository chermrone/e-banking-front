import {User} from './user';

export class Message {
  id: number;
  content: string;
  subject: string;
  state: string;
  creationDate: string;
  user: User;
}
