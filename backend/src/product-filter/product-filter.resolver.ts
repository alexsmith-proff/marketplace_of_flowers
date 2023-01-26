import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductFilterService } from './product-filter.service';
import { CreateProductFilterInput } from './dto/create-product-filter.input';
import { UpdateProductFilterInput } from './dto/update-product-filter.input';
import { ProductFilterEntity } from './entities/product-filter.entity';

@Resolver(() => ProductFilterEntity)
export class ProductFilterResolver {
  constructor(private readonly productFilterService: ProductFilterService) {}

  @Mutation(() => ProductFilterEntity)
  createProductFilter(@Args('createProductFilterInput') createProductFilterInput: CreateProductFilterInput) {
    return this.productFilterService.create(createProductFilterInput);
  }

  @Query(() => [ProductFilterEntity], { name: 'productFilter' })
  findAll() {
    return this.productFilterService.findAll();
  }

  @Query(() => ProductFilterEntity, { name: 'productFilter' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productFilterService.findOne(id);
  }

  @Mutation(() => ProductFilterEntity)
  updateProductFilter(@Args('updateProductFilterInput') updateProductFilterInput: UpdateProductFilterInput) {
    return this.productFilterService.update(updateProductFilterInput.id, updateProductFilterInput);
  }

  @Mutation(() => ProductFilterEntity)
  removeProductFilter(@Args('id', { type: () => Int }) id: number) {
    return this.productFilterService.remove(id);
  }
}
