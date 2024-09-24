import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OffersModule } from './offers.module';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { DatabaseModule } from './database.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.DB_URL}/${process.env.DB_NAME}`),
    OffersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
