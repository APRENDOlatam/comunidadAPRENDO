import { Document } from 'mongoose';

export interface Activity extends Document {
  readonly title : string;
  readonly description  : string;
  readonly required_POAP_Id : string;
  readonly createdat: Date;
}
