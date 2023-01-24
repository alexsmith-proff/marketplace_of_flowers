import { Module } from '@nestjs/common';
import { FilterValueService } from './filtervalue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterElementEntity } from 'src/filterelement/entities/filterelement.entity';
import { FiltervalueResolver } from './filtervalue.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FilterElementEntity])],
  providers: [FiltervalueResolver, FilterValueService]
})
export class FilterValueModule {}
