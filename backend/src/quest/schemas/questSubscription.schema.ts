import { Schema } from 'mongoose';

export const QuestSubscriptionSchema = new Schema({
  idQuest: { type: String, required: true },
  idUser: { type: String, required: true },
  createdat: {
    type: Date,
    default: Date.now,
  },
});
