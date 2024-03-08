// cursos.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { CursoSchema } from './curso.model'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Curso', schema: CursoSchema }]), 
  ],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
