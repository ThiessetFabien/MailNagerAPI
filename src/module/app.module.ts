import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controller/app.controller.js'
import { OffersModule } from './offers.module.js';
import { AppService } from '../service/app.service';
import { OfferSchema } from '../schema/offers.schema';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${process.env.DB_URL}`, {
        dbName: `${process.env.DB_NAME}`
      }),
    MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }]),
    OffersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
