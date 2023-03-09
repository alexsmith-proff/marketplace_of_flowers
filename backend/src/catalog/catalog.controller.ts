import { Body, Controller, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CatalogService } from './catalog.service';
import { CreateCatalogInput } from './dto/create-catalog.input';

@Controller('api/catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) { }

  @Post('create')
  @UseInterceptors(FilesInterceptor('images'))
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createProductInput: CreateCatalogInput) { 
    return this.catalogService.createAPI(files, createProductInput)
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.catalogService.findOne(params.id)
  }

}