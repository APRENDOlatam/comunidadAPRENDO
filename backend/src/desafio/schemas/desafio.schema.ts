import { Schema } from 'mongoose';

export const DesafioSchema = new Schema({
  nombre_desafío: { type: String, required: true },
  id_desafio: String,
  categoria: String,
  descripcion: String,
  nivel: String,
  incentivo: String,
  blockchain: String,
  estado: Boolean,
  createdat: {
    type: Date,
    default: Date.now,
  },
});
