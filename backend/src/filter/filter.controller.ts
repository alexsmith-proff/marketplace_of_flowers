import { Controller, Get, Param } from "@nestjs/common"
import { FilterService } from "./filter.service"

@Controller('api/filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) { }

  // Найдет все фильтры
  @Get()
  findAll() { 
    return this.filterService.findAll()
  }

  // Найдет фильтр по slug
  @Get(':slug')
  findBySlug(@Param() params){
    return this.filterService.findBySlug(params.slug)
}


}