import { Body, Controller, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateImgElementInput } from './dto/create-imgelement.input';
import { ImgElementService } from './imgelement.service';

@Controller('api/imgelement')
export class ImgElementController {
  constructor(private readonly imgElementService: ImgElementService) { }

  // @Get(':slug')
  //   findBySlug(@Param() params){
  //       console.log('nkkkkkmnmnmnmnmnmnmnmn');
  //       return 'this.menuService.findBySlug(params.slug)'
  //   }

//   @Post('create')
//   findBySlug(@Param() params){
  //     return 'jhkjhj'
  // }
  
  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File, @Body() CreateImgElementInput: CreateImgElementInput) {    
        console.log('nmnmnmnmnmrrrrrrrrrrrrrrr');
    return this.imgElementService.create(file, CreateImgElementInput)
  }

}

