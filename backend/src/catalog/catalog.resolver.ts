import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatalogService } from './catalog.service';
import { CatalogEntity } from './entities/catalog.entity';
import { CreateCatalogInput } from './dto/create-catalog.input';
import { UpdateCatalogInput } from './dto/update-catalog.input';
import { FindCatalogInput } from './dto/find-catalog.input';

@Resolver(() => CatalogEntity)
export class CatalogResolver {
  constructor(private readonly catalogService: CatalogService) {}

  @Mutation(() => CatalogEntity)
  createCatalog(@Args('createCatalogInput') createCatalogInput: CreateCatalogInput) {
    return this.catalogService.create(createCatalogInput);
  }

  @Query(() => [CatalogEntity], { name: 'getAllCatalog' })
  findAll() {
    return this.catalogService.findAll();
  }

  @Query(() => [CatalogEntity], { name: 'getCatalogByParent'})
  findCatalogByParent(@Args('findCatalogInput') findCatalogInput: FindCatalogInput){
    return this.catalogService.findByParent(findCatalogInput)
  }

  // @Query(() => Catalog, { name: 'catalog' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.catalogService.findOne(id);
  // }

  // @Mutation(() => CatalogEntity)
  // updateCatalog(@Args('updateCatalogInput') updateCatalogInput: UpdateCatalogInput) {
  //   return this.catalogService.update(updateCatalogInput.id, updateCatalogInput);
  // }

  // @Mutation(() => CatalogEntity)
  // removeCatalog(@Args('id', { type: () => Int }) id: number) {
  //   return this.catalogService.remove(id);
  // }
}
