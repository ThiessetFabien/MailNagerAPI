import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OffersController } from './controller/offers.controller.js';
import { AppService } from './app.service';
import { OffersService } from './service/offers.service.js';
import { OfferSchema } from './schema/offers.schema.js';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.DB_URL}`, {
      dbName: `${process.env.DB_NAME}`,
    }),
    MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }]),
  ],
  controllers: [OffersController],
  providers: [AppService, OffersService],
})
export class AppModule {}
