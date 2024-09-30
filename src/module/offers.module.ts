import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OffersController } from '../controller/offers/offers.controller';
import { OffersService } from '../service/offers/offers.service';
import { Offer, OfferSchema } from '../schema/offers.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }]),
  ],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
