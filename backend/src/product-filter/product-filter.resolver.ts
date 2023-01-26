import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductFilterService } from './product-filter.service';
import { ProductFilter } from './entities/product-filter.entity';
import { CreateProductFilterInput } from './dto/create-product-filter.input';
import { UpdateProductFilterInput } from './dto/update-product-filter.input';

@Resolver(() => ProductFilter)
export class ProductFilterResolver {
  constructor(private readonly productFilterService: ProductFilterService) {}

  @Mutation(() => ProductFilter)
  createProductFilter(@Args('createProductFilterInput') createProductFilterInput: CreateProductFilterInput) {
    return this.productFilterService.create(createProductFilterInput);
  }

  @Query(() => [ProductFilter], { name: 'productFilter' })
  findAll() {
    return this.productFilterService.findAll();
  }

  @Query(() => ProductFilter, { name: 'productFilter' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productFilterService.findOne(id);
  }

  @Mutation(() => ProductFilter)
  updateProductFilter(@Args('updateProductFilterInput') updateProductFilterInput: UpdateProductFilterInput) {
    return this.productFilterService.update(updateProductFilterInput.id, updateProductFilterInput);
  }

  @Mutation(() => ProductFilter)
  removeProductFilter(@Args('id', { type: () => Int }) id: number) {
    return this.productFilterService.remove(id);
  }
}
