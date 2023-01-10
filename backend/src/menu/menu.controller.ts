import { Controller, Get, Param } from "@nestjs/common";
import { MenuService } from "./menu.service";

@Controller('/api/menu')
export class MenuController{
    
    constructor(private readonly menuService: MenuService) {}
    @Get(':slug')
    findBySlug(@Param() params){
        return this.menuService.findBySlug(params.slug)
    }

}