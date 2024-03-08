import { Schema, Document, Types } from 'mongoose';

export interface Tema extends Document {
  _id: Types.ObjectId;
  nombre: string;
  contenido: string;
}

export const TemaSchema = new Schema<Tema>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    nombre: { type: String, required: true },
    contenido: { type: String, required: true },
  },
  { timestamps: true },
);
