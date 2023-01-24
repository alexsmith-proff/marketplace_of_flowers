import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterResolver } from './filter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterEntity } from './entities/filter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FilterEntity])],
  providers: [FilterResolver, FilterService]
})
export class FilterModule {}
