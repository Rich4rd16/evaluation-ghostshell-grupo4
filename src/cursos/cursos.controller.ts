import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.model';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  async crearCurso(@Body() curso: Curso): Promise<Curso> {
    return await this.cursosService.crearCurso(curso);
  }

  @Get()
  async obtenerCursos(): Promise<Curso[]> {
    return await this.cursosService.obtenerCursos();
  }

  @Get(':id')
  async obtenerCursoPorId(@Param('id') cursoId: string): Promise<Curso> {
    return await this.cursosService.obtenerCursoPorId(cursoId);
  }

  @Put(':id')
  async actualizarCurso(@Param('id') cursoId: string, @Body() nuevoCurso: Curso): Promise<Curso> {
    return await this.cursosService.actualizarCurso(cursoId, nuevoCurso);
  }

  @Delete(':id')
  async eliminarCurso(@Param('id') cursoId: string): Promise<void> {
    return await this.cursosService.eliminarCurso(cursoId);
  }

  @Post(':cursoId/temas/:temaId')
  async agregarTemaACurso(@Param('cursoId') cursoId: string, @Param('temaId') temaId: string): Promise<Curso> {
    return await this.cursosService.agregarTemaACurso(cursoId, temaId);
  }

  @Delete(':cursoId/temas/:temaId')
  async eliminarTemaDeCurso(@Param('cursoId') cursoId: string, @Param('temaId') temaId: string): Promise<Curso> {
    return await this.cursosService.eliminarTemaDeCurso(cursoId, temaId);
  }
}
