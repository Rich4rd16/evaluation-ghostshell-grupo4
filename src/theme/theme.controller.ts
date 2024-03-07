import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDto, UpdateThemeDto } from './theme.dto';

@Controller('courses/:courseId/classes/:classId/themes')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Post()
  create(@Param('classId') classId: string, @Body() createThemeDto: CreateThemeDto) {
    return this.themeService.create(classId, createThemeDto);
  }

  @Get()
  findAll(@Param('classId') classId: string) {
    return this.themeService.findAll(classId);
  }

  @Get(':themeId')
  findOne(@Param('classId') classId: string, @Param('themeId') themeId: string) {
    return this.themeService.findOne(classId, themeId);
  }

  @Put(':themeId')
  update(@Param('classId') classId: string, @Param('themeId') themeId: string, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themeService.update(classId, themeId, updateThemeDto);
  }

  @Delete(':themeId')
  remove(@Param('classId') classId: string, @Param('themeId') themeId: string) {
    return this.themeService.remove(classId, themeId);
  }
}
