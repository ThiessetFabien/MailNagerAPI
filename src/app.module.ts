import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OfferSchema } from './schemas/offer.schema';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
