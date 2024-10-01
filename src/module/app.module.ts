import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OffersModule } from './offers.module';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { OfferSchema } from '../schema/offers.schema';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(`${process.env.DB_URL}`),
    MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }]),
    OffersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
