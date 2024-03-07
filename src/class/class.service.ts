import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class, ClassDocument } from './class.model';
import { CreateClassDto, UpdateClassDto } from './class.dto';

@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private readonly classModel: Model<ClassDocument>) {}

  async create(courseId: string, createClassDto: CreateClassDto): Promise<Class> {
    const createdClass = new this.classModel({ ...createClassDto, courseId });
    return createdClass.save();
  }

  async findAll(courseId: string): Promise<Class[]> {
    return this.classModel.find({ courseId }).exec();
  }

  async findOne(courseId: string, classId: string): Promise<Class> {
    const foundClass = await this.classModel.findOne({ _id: classId, courseId }).exec();
    if (!foundClass) {
      throw new NotFoundException(`Class with ID ${classId} not found`);
    }
    return foundClass;
  }

  async update(courseId: string, classId: string, updateClassDto: UpdateClassDto): Promise<Class> {
    const updatedClass = await this.classModel.findOneAndUpdate(
      { _id: classId, courseId },
      { $set: updateClassDto },
      { new: true }
    );
    if (!updatedClass) {
      throw new NotFoundException(`Class with ID ${classId} not found`);
    }
    return updatedClass;
  }

  async remove(courseId: string, classId: string): Promise<void> {
    const result = await this.classModel.deleteOne({ _id: classId, courseId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Class with ID ${classId} not found`);
    }
  }
}
