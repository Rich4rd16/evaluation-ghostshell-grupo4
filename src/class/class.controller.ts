import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto, UpdateClassDto } from './class.dto';

@Controller('courses/:courseId/classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  create(@Param('courseId') courseId: string, @Body() createClassDto: CreateClassDto) {
    return this.classService.create(courseId, createClassDto);
  }

  @Get()
  findAll(@Param('courseId') courseId: string) {
    return this.classService.findAll(courseId);
  }

  @Get(':classId')
  findOne(@Param('courseId') courseId: string, @Param('classId') classId: string) {
    return this.classService.findOne(courseId, classId);
  }

  @Put(':classId')
  update(@Param('courseId') courseId: string, @Param('classId') classId: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(courseId, classId, updateClassDto);
  }

  @Delete(':classId')
  remove(@Param('courseId') courseId: string, @Param('classId') classId: string) {
    return this.classService.remove(courseId, classId);
  }
}
