import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.model';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findOne(courseId: string): Promise<Course> {
    const foundCourse = await this.courseModel.findById(courseId).exec();
    if (!foundCourse) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
    return foundCourse;
  }

  async update(courseId: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const updatedCourse = await this.courseModel.findByIdAndUpdate(courseId, updateCourseDto, { new: true });
    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
    return updatedCourse;
  }

  async remove(courseId: string): Promise<void> {
    const result = await this.courseModel.deleteOne({ _id: courseId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
  }
}
