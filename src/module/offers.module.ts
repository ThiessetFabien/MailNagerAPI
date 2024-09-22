import { Module } from '@nestjs/common';
import { OffersController } from '../controller/offers/offers.controller';
import { OffersService } from '../service/offers/offers.service';
import { offersProviders } from '../provider/offers.providers';
import { DatabaseModule } from './database.module.js';

@Module({
  imports: [DatabaseModule],
  controllers: [OffersController],
  providers: [
    OffersService,
    ...offersProviders,
  ],
})
export class OffersModule {}
