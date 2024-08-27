import { Document } from 'mongoose';

export interface House extends Document {
  readonly id_casa: number;
  readonly nombre_casa: string;
  readonly fecha_registro: Date;
}
