import { Schema } from 'mongoose';

export const CertificacionSchema = new Schema({
  id_desafio: String,
  id_usuario: String,
  fecha_certificacion: String,
  admin_certificador: String,
  estado: Boolean,
  createdat: {
    type: Date,
    default: Date.now,
  },
});
