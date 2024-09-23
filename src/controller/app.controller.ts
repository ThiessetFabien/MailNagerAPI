import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

const VERSION = process.env.VERSION || '1.0.0';
@Controller(`/api/v${VERSION}`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
