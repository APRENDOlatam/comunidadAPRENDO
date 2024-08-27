import { Schema } from 'mongoose';

export const HouseSchema = new Schema({
  id_casa: { type: Number, required: true },
  nombre_casa: { type: String, required: true },
  fecha_registro: {
    type: Date,
    default: Date.now,
  },
});
