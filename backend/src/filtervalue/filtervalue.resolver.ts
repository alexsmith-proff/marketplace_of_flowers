import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FilterValueService } from './filtervalue.service';
import { CreateFilterValueInput } from './dto/create-filtervalue.input';
import { UpdateFilterValueInput } from './dto/update-filtervalue.input';
import { FilterValueEntity } from './entities/filtervalue.entity';

@Resolver(() => FilterValueEntity)
export class FiltervalueResolver {
  constructor(private readonly filterValueService: FilterValueService) {}

  @Mutation(() => FilterValueEntity)
  createFilterValue(@Args('createFilterValueInput') createFilterValueInput: CreateFilterValueInput) {
    return this.filterValueService.create(createFilterValueInput);
  }

  @Query(() => [FilterValueEntity], { name: 'getAllFilterValues' })
  findAll() {
    return this.filterValueService.findAll();
  }

  @Query(() => FilterValueEntity, { name: 'filtervalue' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.filterValueService.findOne(id);
  }

  @Mutation(() => FilterValueEntity)
  updateFilterValue(@Args('updateFilterValueInput') updateFilterValueInput: UpdateFilterValueInput) {
    return this.filterValueService.update(updateFilterValueInput.id, updateFilterValueInput);
  }

  @Mutation(() => FilterValueEntity)
  removeFilterValue(@Args('id', { type: () => Int }) id: number) {
    return this.filterValueService.remove(id);
  }
}
