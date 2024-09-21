import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OfferDocument = HydratedDocument<Offer>;

@Schema()
export class Offer {
  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  contract: string[];

  @Prop({ required: true })
  hourlyRate: string[];

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  jobTitle: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
