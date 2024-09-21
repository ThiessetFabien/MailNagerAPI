import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OffersController } from '../controllers/offers.controllers.js';
import { OffersService } from '../services/offers.service.js';
import { Offer, OfferSchema } from '../schemas/offers.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }]),
  ],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
