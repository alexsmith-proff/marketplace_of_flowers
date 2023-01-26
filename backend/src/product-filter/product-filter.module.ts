import { Module } from '@nestjs/common';
import { ProductFilterService } from './product-filter.service';
import { ProductFilterResolver } from './product-filter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductFilterEntity } from './entities/product-filter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductFilterEntity])],
  providers: [ProductFilterResolver, ProductFilterService]
})
export class ProductFilterModule {}
