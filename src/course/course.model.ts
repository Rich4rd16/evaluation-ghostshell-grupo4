import { Document } from 'mongoose';

export interface CourseModel {
  title: string;
  description: string;
}

export class Course implements CourseModel {
  constructor(public title: string, public description: string) {}
}

export type CourseDocument = CourseModel & Document;
