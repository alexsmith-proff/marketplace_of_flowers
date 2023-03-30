import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterResolver } from './filter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterEntity } from './entities/filter.entity';
import { FilterController } from './filter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FilterEntity])],
  providers: [FilterResolver, FilterService],
  controllers: [FilterController]
})
export class FilterModule {}
