import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { AppController } from '../controller/app.controller.js';
import { OffersModule } from './offers.module.js';
import { AppService } from '../service/app.service';
import { DatabaseModule } from './database.module.js';
@Module({
  imports: [MongooseModule.forRoot(`${process.env.DB_URL}`),
    OffersModule, 
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
