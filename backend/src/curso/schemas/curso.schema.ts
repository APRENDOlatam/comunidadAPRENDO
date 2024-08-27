import { Schema } from 'mongoose';

export const CursoSchema = new Schema({
  nombre_curso: { type: String, required: true },
  id_curso: String,
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
