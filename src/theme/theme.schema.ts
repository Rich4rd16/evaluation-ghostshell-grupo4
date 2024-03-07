import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ThemeModel } from './theme.model';

@Schema()
export class Theme extends Document implements ThemeModel {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const ThemeSchema = SchemaFactory.createForClass(Theme);
