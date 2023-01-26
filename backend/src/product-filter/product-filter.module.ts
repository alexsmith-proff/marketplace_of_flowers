import { Module } from '@nestjs/common';
import { ProductFilterService } from './product-filter.service';
import { ProductFilterResolver } from './product-filter.resolver';

@Module({
  providers: [ProductFilterResolver, ProductFilterService]
})
export class ProductFilterModule {}
