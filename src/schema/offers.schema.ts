import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateOfferDto } from 'src/dto/create-offer.dto.js';

export const enum Contract {
  CDI = 'CDI',
  CDD = 'CDD',
  ALTERNANCE = 'Alternance',
  STAGE = 'Stage',
  INTERIM = 'Intérim',
}

export const enum HourlyRate {
  TEMPS_PLEIN = 'Temps plein',
  TEMPS_PARTIEL = 'Temps partiel',
  FREELANCE = 'Freelance',
  MI_TEMPS = 'Mi-temps',
}
@Schema({
  timestamps: true,
})
export class Offer {
  static create(createOfferDto: CreateOfferDto) {
    throw new Error('Method not implemented.');
  }
  @Prop()
  link: string;

  @Prop()
  date: string;

  @Prop()
  contract: Contract;

  @Prop()
  hourlyRate: HourlyRate;

  @Prop()
  company: string;

  @Prop()
  location: string;

  @Prop({ required: true })
  name: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);