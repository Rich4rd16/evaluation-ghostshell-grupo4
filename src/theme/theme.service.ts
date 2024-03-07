import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theme, ThemeDocument } from './theme.model';
import { CreateThemeDto, UpdateThemeDto } from './theme.dto';

@Injectable()
export class ThemeService {
  constructor(@InjectModel(Theme.name) private readonly themeModel: Model<ThemeDocument>) {}

  async create(classId: string, createThemeDto: CreateThemeDto): Promise<Theme> {
    const createdTheme = new this.themeModel({ ...createThemeDto, classId });
    return createdTheme.save();
  }

  async findAll(classId: string): Promise<Theme[]> {
    return this.themeModel.find({ classId }).exec();
  }

  async findOne(classId: string, themeId: string): Promise<Theme> {
    const foundTheme = await this.themeModel.findOne({ _id: themeId, classId }).exec();
    if (!foundTheme) {
      throw new NotFoundException(`Theme with ID ${themeId} not found`);
    }
    return foundTheme;
  }

  async update(classId: string, themeId: string, updateThemeDto: UpdateThemeDto): Promise<Theme> {
    const updatedTheme = await this.themeModel.findOneAndUpdate(
      { _id: themeId, classId },
      { $set: updateThemeDto },
      { new: true }
    );
    if (!updatedTheme) {
      throw new NotFoundException(`Theme with ID ${themeId} not found`);
    }
    return updatedTheme;
  }

  async remove(classId: string, themeId: string): Promise<void> {
    const result = await this.themeModel.deleteOne({ _id: themeId, classId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Theme with ID ${themeId} not found`);
    }
  }
}
