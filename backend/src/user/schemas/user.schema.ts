import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  accountid: String,
  avatar: String,
  firstname: String,
  lastname: String,
  email: String,
  country: String,
  city: String,
  createdat: {
    type: Date,
    default: Date.now,
  },
});
