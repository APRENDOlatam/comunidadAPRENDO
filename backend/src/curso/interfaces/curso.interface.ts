import { Document } from 'mongoose';

export interface Curso extends Document {
  id_curso: string;
  readonly nombre_curso: string;
  readonly descripcion: string;
  readonly nivel: string;
  readonly incentivo: string;
  readonly blockchain: string;
  readonly estado: boolean;
  readonly createdat: Date;
}
