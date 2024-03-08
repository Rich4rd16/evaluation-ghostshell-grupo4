import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tema } from './tema.model';

@Injectable()
export class TemasService {
  constructor(@InjectModel('Tema') private readonly temaModel: Model<Tema>) {}

  async crearTema(tema: Tema): Promise<Tema> {
    const nuevoTema = new this.temaModel(tema);
    return await nuevoTema.save();
  }

  async obtenerTemas(): Promise<Tema[]> {
    return await this.temaModel.find().exec();
  }

  async obtenerTemaPorId(temaId: string): Promise<Tema> {
    return await this.temaModel.findById(temaId).exec();
  }

  async actualizarTema(temaId: string, nuevoTema: Tema): Promise<Tema> {
    return await this.temaModel.findByIdAndUpdate(temaId, nuevoTema, { new: true }).exec();
  }

  async eliminarTema(temaId: string): Promise<void> {
    await this.temaModel.findByIdAndDelete(temaId).exec();
  }
}
