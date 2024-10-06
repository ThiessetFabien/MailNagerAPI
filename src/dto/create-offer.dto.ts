import { IsNotEmpty, IsDate, IsString, MaxLength, IsIn } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly link: string;

  @IsNotEmpty()
  @IsIn(['Cdi', 'Cdd', 'Stage', 'Alternance', 'Intérim'])
  readonly Contract: string;

  @IsNotEmpty()
  @IsIn(['Temps plein', 'Temps partiel', 'Mi-temps', 'Freelance'])
  readonly HourlyRate: string;

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
  readonly name: string;
}
