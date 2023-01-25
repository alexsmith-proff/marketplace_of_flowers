import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FilterElementService } from './filterelement.service';
import { FilterElementEntity } from './entities/filterelement.entity';
import { CreateFilterElementInput } from './dto/create-filterelement.input';
import { UpdateFilterElementInput } from './dto/update-filterelement.input';

@Resolver(() => FilterElementEntity)
export class FilterElementResolver {
  constructor(private readonly filterElementService: FilterElementService) {}

  @Mutation(() => FilterElementEntity)
  createFilterElement(@Args('createFilterElementInput') createFilterElementInput: CreateFilterElementInput) {
    return this.filterElementService.create(createFilterElementInput);
  }

  @Query(() => [FilterElementEntity], { name: 'getFilterElement' })
  findAll() {
    return this.filterElementService.findAll();
  }

  @Query(() => FilterElementEntity, { name: 'filterElement' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.filterElementService.findOne(id);
  }

  // @Mutation(() => FilterElementEntity)
  // updateFilterelement(@Args('updateFilterelementInput') updateFilterelementInput: UpdateFilterElementInput) {
  //   return this.filterElementService.update(updateFilterelementInput.id, updateFilterelementInput);
  // }

  // @Mutation(() => FilterElementEntity)
  // removeFilterelement(@Args('id', { type: () => Int }) id: number) {
  //   return this.filterElementService.remove(id);
  // }
}
