import { Schema } from 'mongoose';

export const QuestSchema = new Schema({
  nameQuest: { type: String, required: true },
  createdat: {
    type: Date,
    default: Date.now,
  },
});
