import { IsNotEmpty, IsDate, IsString, MaxLength, IsIn } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly link: string;

  @IsNotEmpty()
  @IsDate()
  readonly date: string;

  @IsNotEmpty()
  @IsIn(['cdi', 'cdd', 'stage', 'alternance', 'intérim'])
  readonly contract: string;

  @IsNotEmpty()
  @IsIn(['temps plein', 'temps partiel', 'mi-temps', 'freelance'])
  readonly hourlyRate: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly company: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly location: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly title: string;
}
