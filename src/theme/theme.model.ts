import { Document } from 'mongoose';

export interface ThemeModel {
  title: string;
  description: string;
}

export class Theme implements ThemeModel {
  constructor(public title: string, public description: string) {}
}

export type ThemeDocument = ThemeModel & Document;
