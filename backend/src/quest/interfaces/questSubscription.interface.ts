import { Document } from 'mongoose';

export interface QuestSubscription extends Document {
  readonly idQuest: string;
  readonly idUser: string;
  readonly createdat: Date;
}
