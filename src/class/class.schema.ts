import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ClassModel } from './class.model';

@Schema()
export class Class {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
