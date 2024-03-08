import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TemasService } from './temas.service';
import { Tema } from './tema.model';

@Controller('temas')
export class TemasController {
  constructor(private readonly temasService: TemasService) {}

  @Post()
  async crearTema(@Body() tema: Tema): Promise<Tema> {
    return await this.temasService.crearTema(tema);
  }

  @Get()
  async obtenerTemas(): Promise<Tema[]> {
    return await this.temasService.obtenerTemas();
  }

  @Get(':id')
  async obtenerTemaPorId(@Param('id') temaId: string): Promise<Tema> {
    return await this.temasService.obtenerTemaPorId(temaId);
  }

  @Put(':id')
  async actualizarTema(@Param('id') temaId: string, @Body() nuevoTema: Tema): Promise<Tema> {
    return await this.temasService.actualizarTema(temaId, nuevoTema);
  }

  @Delete(':id')
  async eliminarTema(@Param('id') temaId: string): Promise<void> {
    return await this.temasService.eliminarTema(temaId);
  }
}
