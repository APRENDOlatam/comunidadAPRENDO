import { Schema } from 'mongoose';

export const ActivitySchema = new Schema({
  title : { type: String, required: true },
  description  : String,
  required_POAP_Id : String,
  createdat: {
    type: Date,
    default: Date.now,
  },
});
