import { Document } from 'mongoose';

export interface ClassModel {
  title: string;
  description: string;
}

export class Class implements ClassModel {
  constructor(public title: string, public description: string) {}
}

export type ClassDocument = ClassModel & Document;
