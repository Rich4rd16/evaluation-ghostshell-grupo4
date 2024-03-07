export class CreateCourseDto {
  readonly title: string;
  readonly description: string;
}

export class UpdateCourseDto {
  readonly title?: string;
  readonly description?: string;
}
