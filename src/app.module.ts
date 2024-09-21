import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { OffersController } from './controller/offers.controller.js';
import { AppService } from './app.service';
import { OffersService } from './service/offers.service.js';
import { OfferSchema } from './schema/offers.schema.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/', { dbName: 'offers' }),
    MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }]),
  ],
  controllers: [AppController, OffersController],
  providers: [AppService, OffersService],
})
export class AppModule {}
