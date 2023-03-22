import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CreateProductInput } from './dto/create-product.input';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post('create')
  @UseInterceptors(FilesInterceptor('images'))
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createProductInput: CreateProductInput) { 
    return this.productService.createAPI(files, createProductInput)
  }

  @Get('minmaxprice')
  findMinMaxPrice(){
    return this.productService.findMinMaxPrice()
    // return 'this.productService.findMinMaxPrice()'
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.productService.findOne(params.id)
  }







//   @Delete('delete')
//   delete(@Body() deleteImgElementInput: DeleteImgElementInput) {    
//     return this.productService.remove(deleteImgElementInput)
//   }

}