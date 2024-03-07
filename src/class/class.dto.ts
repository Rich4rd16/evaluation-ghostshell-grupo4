export class CreateClassDto {
  readonly title: string;
  readonly description: string;
}

export class UpdateClassDto {
  readonly title?: string;
  readonly description?: string;
}
