import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OfferDocument = HydratedDocument<Offer>;

@Schema()
export class Offer {
  @Prop()
  link: string;

  @Prop()
  date: string;

  @Prop()
  contract: string[];

  @Prop()
  hourlyRate: string[];

  @Prop()
  company: string;

  @Prop()
  location: string;

  @Prop()
  name: string;
  // jobTitle
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
