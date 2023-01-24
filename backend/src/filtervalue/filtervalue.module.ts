import { Module } from '@nestjs/common';
import { FilterValueService } from './filtervalue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiltervalueResolver } from './filtervalue.resolver';
import { FilterValueEntity } from './entities/filtervalue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FilterValueEntity])],
  providers: [FiltervalueResolver, FilterValueService]
})
export class FilterValueModule {}
