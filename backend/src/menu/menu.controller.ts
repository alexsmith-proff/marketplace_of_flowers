import { Controller, Get } from "@nestjs/common";
import { MenuService } from "./menu.service";

@Controller('/api/menu')
export class MenuController{
    constructor(private readonly menuService: MenuService) {}
    @Get('/u')
    findBySlug(slug: string){
        return this.menuService.findBySlug('menyu-v-khedere')
    }

}