import { Body, Controller, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CatalogService } from './catalog.service';
import { CreateCatalogInput } from './dto/create-catalog.input';
import { UpdateCatalogInput } from './dto/update-catalog.input';

@Controller('api/catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) { }

  @Post('create')
  @UseInterceptors(FilesInterceptor('images'))
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createProductInput: CreateCatalogInput) { 
    return this.catalogService.createAPI(files, createProductInput)
  }

  // Найдет весь каталог
  @Get()
  findAll() { 
    return this.catalogService.findAll()
  }

  // Найдет все дочерние каталоги по parent slug
  @Get('parent/:slug')
  findByParentSlug(@Param() params) {
    return this.catalogService.findByParentSlug(params.slug)
  }

  // Найдет католог по slug
  @Get(':slug')
  findBySlug(@Param() params) {
    return this.catalogService.findBySlug(params.slug)
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.catalogService.findOne(params.id)
  }

  @Post('update')
  @UseInterceptors(FilesInterceptor('images'))
  update(@UploadedFiles() files: Array<Express.Multer.File>, @Body() updateCatalogInput: UpdateCatalogInput) { 
    return this.catalogService.updateAPI(files, updateCatalogInput)
  }

}