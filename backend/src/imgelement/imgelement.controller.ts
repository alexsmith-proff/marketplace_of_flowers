import { Body, Controller, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateImgElementInput } from './dto/create-imgelement.input';
import { ImgElementService } from './imgelement.service';

@Controller('api/imgelement')
export class ImgElementController {
  constructor(private readonly imgElementService: ImgElementService) { }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File, @Body() CreateImgElementInput: CreateImgElementInput) {    
    return this.imgElementService.create(file, CreateImgElementInput)
  }

}

