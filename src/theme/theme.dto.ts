export class CreateThemeDto {
  readonly title: string;
  readonly description: string;
}

export class UpdateThemeDto {
  readonly title?: string;
  readonly description?: string;
}
