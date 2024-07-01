import { Document } from 'mongoose';

export interface Quest extends Document {
  readonly nameQuest: string;
  readonly createdat: Date;
}
