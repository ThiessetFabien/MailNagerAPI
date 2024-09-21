import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app.module';
import { OffersModule } from './modules/offers.module';

async function bootstrap() {
  const app = await NestFactory.create({
    AppModule,
    OffersModule,
  });
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
