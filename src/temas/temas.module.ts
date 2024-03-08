import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemasController } from './temas.controller';
import { TemasService } from './temas.service';
import { TemaSchema } from './tema.model'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tema', schema: TemaSchema }]), 
  ],
  controllers: [TemasController],
  providers: [TemasService],
})
export class TemasModule {}
