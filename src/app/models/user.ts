import {Role} from './role';
import {Message} from './message';


export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  lastLoginDate: string;
  sexe: string;
  role: Role[];
  isActive: boolean;
  message: Message;
}
