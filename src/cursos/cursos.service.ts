import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'bson'; 
import { Curso } from './curso.model';



@Injectable()
export class CursosService {
  constructor(@InjectModel('Curso') private readonly cursoModel: Model<Curso>) {}

  async crearCurso(curso: Curso): Promise<Curso> {
    const nuevoCurso = new this.cursoModel(curso);
    return await nuevoCurso.save();
  }

  async obtenerCursos(): Promise<Curso[]> {
    return await this.cursoModel.find().populate('temas').exec();
  }

  async obtenerCursoPorId(cursoId: string): Promise<Curso> {
    return await this.cursoModel.findById(cursoId).populate('temas').exec();
  }

  async actualizarCurso(cursoId: string, nuevoCurso: Curso): Promise<Curso> {
    return await this.cursoModel.findByIdAndUpdate(cursoId, nuevoCurso, { new: true }).populate('temas').exec();
  }

  async eliminarCurso(cursoId: string): Promise<void> {
    await this.cursoModel.findByIdAndDelete(cursoId).exec();
  }

  async agregarTemaACurso(cursoId: string, temaId: string): Promise<Curso> {
    const curso = await this.cursoModel.findById(cursoId).exec();
    curso.temas.push(new ObjectId(temaId)); 
    return await curso.save();
  }

  async eliminarTemaDeCurso(cursoId: string, temaId: string): Promise<Curso> {
    const curso = await this.cursoModel.findById(cursoId).exec();
    curso.temas = curso.temas.filter((t) => t.toString() !== temaId);
    return await curso.save();
  }
  
}
