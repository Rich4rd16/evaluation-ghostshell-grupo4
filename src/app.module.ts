import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { ClassModule } from './class/class.module';
import { ThemeModule } from './theme/theme.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rich4rd16:ESPE178059@cluster0.ziisd1n.mongodb.net/ecommerce'),
    CourseModule,
    ClassModule,
    ThemeModule,
  ],
})
export class AppModule {}
