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
  @Prop()
  link: string;

  @Prop()
  date: string;

  @Prop()
  contract: string;

  @Prop()
  hourlyRate: string;

  @Prop()
  company: string;

  @Prop()
  location: string;

  @Prop({ required: true })
  name: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
