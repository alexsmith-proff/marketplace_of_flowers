import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateImgElementInput } from './dto/create-imgelement.input';
import { DeleteImgElementInput } from './dto/delete-imgelement.input';
import { ImgElementService } from './imgelement.service';

@Controller('api/imgelement')
export class ImgElementController {
  constructor(private readonly imgElementService: ImgElementService) { }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File, @Body() CreateImgElementInput: CreateImgElementInput) {    
    return this.imgElementService.create(file, CreateImgElementInput)
  }

  @Delete('delete')
  delete(@Body() deleteImgElementInput: DeleteImgElementInput) {    
    return this.imgElementService.remove(deleteImgElementInput)
  }

}

