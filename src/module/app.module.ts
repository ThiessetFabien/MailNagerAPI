import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller.js';
import { OffersModule } from './offers.module.js';
import { AppService } from '../service/app.service';
import { DatabaseModule } from './database.module.js';
@Module({
  imports: [OffersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
