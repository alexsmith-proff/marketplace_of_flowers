import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ddd')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('asd')
  getHello(): string {
    return this.appService.getHello();
  }
}
