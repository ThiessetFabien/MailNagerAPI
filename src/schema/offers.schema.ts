import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  contract: Contract;

  @Prop({ required: true })
  hourlyRate: HourlyRate;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  title: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
