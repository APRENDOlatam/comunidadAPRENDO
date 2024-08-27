import { Document } from 'mongoose';

export interface Desafio extends Document {
  id_desafio: string;
  readonly nombre_desafío: string;
  readonly categoria: string;
  readonly incentivo: string;
  readonly blockchain: string;
  readonly estado: boolean;
  readonly createdat: Date;
}
