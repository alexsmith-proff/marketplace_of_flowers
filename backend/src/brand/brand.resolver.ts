import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrandService } from './brand.service';
import { BrandEntity } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';

@Resolver(() => BrandEntity)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Mutation(() => BrandEntity)
  createBrand(@Args('createBrandInput') createBrandInput: CreateBrandInput) {
    return this.brandService.create(createBrandInput);
  }

  @Query(() => [BrandEntity], { name: 'getAllBrands' })
  findAll() {
    return this.brandService.findAll();
  }

  @Query(() => BrandEntity, { name: 'getBrandById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.brandService.findOne(id);
  }

  @Mutation(() => BrandEntity)
  updateBrand(@Args('updateBrandInput') updateBrandInput: UpdateBrandInput) {
    return this.brandService.update(updateBrandInput.id, updateBrandInput);
  }

  @Mutation(() => BrandEntity)
  removeBrand(@Args('id', { type: () => Int }) id: number) {
    return this.brandService.remove(id);
  }
}
