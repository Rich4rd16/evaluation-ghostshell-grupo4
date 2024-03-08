import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosModule } from './cursos/cursos.module';
import { TemasModule } from './temas/temas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rich4rd16:ESPE178059@cluster0.ziisd1n.mongodb.net/ecommerce'),
    CursosModule,
    TemasModule,
  ],
})
export class AppModule {}
