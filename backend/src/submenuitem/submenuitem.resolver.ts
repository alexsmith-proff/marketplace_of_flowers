import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubmenuItemEntity } from './entities/submenuitem.entity';
import { SubmenuItemService } from './submenuitem.service';
import { CreateSubmenuItemInput } from './dto/create-submenuitem.input';
import { UpdateSubmenuItemInput } from './dto/update-submenuitem.input';

@Resolver(() => SubmenuItemEntity)
export class SubmenuItemResolver {
  constructor(private readonly submenuItemService: SubmenuItemService) {}

  @Mutation(() => SubmenuItemEntity)
  createSubmenuItem(@Args('createSubmenuItemInput') createSubmenuItemInput: CreateSubmenuItemInput) {
    return this.submenuItemService.create(createSubmenuItemInput);
  }

  @Query(() => [SubmenuItemEntity])
  getAllSubmenuItems() {
    return this.submenuItemService.findAll();
  }

  @Query(() => SubmenuItemEntity)
  getSubmenuItemById(@Args('id', { type: () => Int }) id: number) {
    return this.submenuItemService.findOne(id);
  }

  @Mutation(() => SubmenuItemEntity)
  updateSubmenuItem(@Args('updateSubmenuItemInput') updateSubmenuItemInput: UpdateSubmenuItemInput) {
    return this.submenuItemService.update(updateSubmenuItemInput.id, updateSubmenuItemInput);
  }

  @Mutation(() => SubmenuItemEntity)
  removeSubmenuItem(@Args('id', { type: () => Int }) id: number) {
    return this.submenuItemService.remove(id);
  }
}