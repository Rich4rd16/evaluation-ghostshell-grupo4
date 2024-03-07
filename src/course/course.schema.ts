import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CourseModel } from './course.model';

@Schema()
export class Course extends Document implements CourseModel {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
