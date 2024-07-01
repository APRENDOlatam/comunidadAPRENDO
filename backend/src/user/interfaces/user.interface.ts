import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly accountid: string;
  readonly avatar: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly country: string;
  readonly city: string;
  readonly createdat: Date;
}
