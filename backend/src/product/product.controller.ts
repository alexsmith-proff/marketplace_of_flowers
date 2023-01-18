import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductInput } from './dto/create-product.input';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post('create')
  @UseInterceptors(FileInterceptor('images'))
  create(@UploadedFile() file: Express.Multer.File, @Body() createProductInput: CreateProductInput) { 
    return this.productService.create(file, createProductInput)
  }






//   @Delete('delete')
//   delete(@Body() deleteImgElementInput: DeleteImgElementInput) {    
//     return this.productService.remove(deleteImgElementInput)
//   }

}