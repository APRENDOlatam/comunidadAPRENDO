import { Document } from 'mongoose';

export interface Certificacion extends Document {
  id_certificacion: string;
  readonly id_desafio: string;
  readonly id_usuario: string;
  readonly estado: boolean;
  readonly fecha_certificacion: Date;
  readonly admin_certificador: string;
  readonly createdat: Date;
}
