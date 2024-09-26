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
  @IsIn(['Cdi', 'Cdd', 'Stage', 'Alternance', 'Intérim'])
  readonly contract: string;

  @IsNotEmpty()
  @IsIn(['Temps plein', 'Temps partiel', 'Mi-temps', 'Freelance'])
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
