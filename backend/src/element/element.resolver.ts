import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ElementService } from './element.service';
import { ElementEntity } from './entities/element.entity';
import { CreateElementInput } from './dto/create-element.input';
import { UpdateElementInput } from './dto/update-element.input';

@Resolver(() => ElementEntity)
export class ElementResolver {
  constructor(private readonly elementService: ElementService) {}

  @Mutation(() => ElementEntity)
  createElement(@Args('createElementInput') createElementInput: CreateElementInput) {
    return this.elementService.create(createElementInput);
  }

  @Query(() => [ElementEntity], { name: 'getAllElements' })
  findAll() {
    return this.elementService.findAll();
  }

  @Query(() => ElementEntity, { name: 'getElementById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.elementService.findOne(id);
  }

  @Mutation(() => ElementEntity)
  updateElement(@Args('updateElementInput') updateElementInput: UpdateElementInput) {
    return this.elementService.update(updateElementInput.id, updateElementInput);
  }

  @Mutation(() => ElementEntity)
  removeElement(@Args('id', { type: () => Int }) id: number) {
    return this.elementService.remove(id);
  }
}
