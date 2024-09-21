import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
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

  @Prop()
  title: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
