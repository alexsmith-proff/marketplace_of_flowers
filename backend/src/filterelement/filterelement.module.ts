import { Module } from '@nestjs/common';
import { FilterElementService } from './filterelement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterElementEntity } from './entities/filterelement.entity';
import { FilterElementResolver } from './filterelement.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FilterElementEntity])],
  providers: [FilterElementResolver, FilterElementService]
})
export class FilterelementModule {}
