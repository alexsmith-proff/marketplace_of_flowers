import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FilterService } from './filter.service';
import { FilterEntity } from './entities/filter.entity';
import { CreateFilterInput } from './dto/create-filter.input';
import { UpdateFilterInput } from './dto/update-filter.input';

@Resolver(() => FilterEntity)
export class FilterResolver {
  constructor(private readonly filterService: FilterService) {}

  @Mutation(() => FilterEntity)
  createFilter(@Args('createFilterInput') createFilterInput: CreateFilterInput) {
    return this.filterService.create(createFilterInput);
  }

  @Query(() => [FilterEntity], { name: 'getAllFilter' })
  findAll() {
    return this.filterService.findAll();
  }

  @Query(() => FilterEntity, { name: 'filter' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.filterService.findOne(id);
  }

  @Mutation(() => FilterEntity)
  updateFilter(@Args('updateFilterInput') updateFilterInput: UpdateFilterInput) {
    return this.filterService.update(updateFilterInput.id, updateFilterInput);
  }

  @Mutation(() => FilterEntity)
  removeFilter(@Args('id', { type: () => Int }) id: number) {
    return this.filterService.remove(id);
  }
}
