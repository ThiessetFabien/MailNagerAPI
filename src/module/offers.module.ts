import { Module } from '@nestjs/common';
import { OffersController } from '../controller/offers/offers.controller';
import { OffersService } from '../service/offers/offers.service';
import { offersProviders } from '../provider/offers.providers';
import { DatabaseModule } from './database.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { OfferSchema } from '../schema/offers.schema';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.DB_URL}`),
    MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }]),
    DatabaseModule,
  ],
  controllers: [OffersController],
  providers: [OffersService, ...offersProviders],
})
export class OffersModule {}
