import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateImgElementDto } from './dto/create-imgelement.dto';
import { ImgElementService } from './imgelement.service';

@Controller('api/imgelement')
export class ImgElementController {
  constructor(private readonly imgElementService: ImgElementService) {}

  @Post('create')
  create(@Body() dto: CreateImgElementDto): string {
    console.log('dto', dto);
    // console.log('name', dto.name);
    // console.log('slug', dto.slug);
    
    return this.imgElementService.createImgBlock()
  }

  @Post('createfile')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFiles() file) {
    console.log(file);
  }

}