import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { ThemeService } from './theme.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Theme, ThemeSchema } from './theme.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Theme.name, schema: ThemeSchema }])],
  controllers: [ThemeController],
  providers: [ThemeService],
})
export class ThemeModule {}
