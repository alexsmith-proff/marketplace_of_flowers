import { Controller, Get, Post } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('api')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get('create')
  SaveFile(): string {
    return this.uploadService.create()
  }
}