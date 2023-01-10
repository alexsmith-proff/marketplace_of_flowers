import { Controller, Get, Param } from "@nestjs/common";
import { SectionService } from "./section.service";

@Controller('/api/section')
export class SectionController{
    constructor(private readonly sectionService: SectionService) {}
    @Get(':slug')
    findBySlug(@Param() params){
        return this.sectionService.findBySlug(params.slug)
    }

}