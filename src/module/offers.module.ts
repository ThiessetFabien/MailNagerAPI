import { Module } from '@nestjs/common';
import { OffersController } from '../controller/offers/offers.controller';
import { OffersService } from '../service/offers/offers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OfferSchema } from '../schema/offers.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }]),
  ],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
