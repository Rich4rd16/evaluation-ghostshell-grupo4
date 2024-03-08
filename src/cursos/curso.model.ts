import { Schema, Document, Types } from 'mongoose';

export interface Curso extends Document {
  _id: Types.ObjectId;
  nombre: string;
  descripcion: string;
  temas: Types.ObjectId[]; 
}

export const CursoSchema = new Schema<Curso>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    temas: [{ type: Schema.Types.ObjectId, ref: 'Tema' }], 
  },
  { timestamps: true },
);
