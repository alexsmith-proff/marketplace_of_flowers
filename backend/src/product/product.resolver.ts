import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { UpdateProductBrandInput } from './dto/update-product-relations.input';

@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => ProductEntity)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }

  @Query(() => [ProductEntity], { name: 'getAllProducts' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => ProductEntity, { name: 'getProductById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => ProductEntity)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }
  
  @Mutation(() => ProductEntity)
  updateProductBrand(@Args('updateProductBrandInput') updateProductBrandInput: UpdateProductBrandInput) {
    return this.productService.updateBrand(updateProductBrandInput)
  }

  @Mutation(() => ProductEntity)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }
}
