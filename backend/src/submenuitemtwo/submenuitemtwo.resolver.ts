import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubmenuItemTwoEntity } from './entities/submenuitemtwo.entity';
import { SubmenuItemTwoService } from './submenuitemtwo.service';
import { CreateSubmenuItemTwoInput } from './dto/create-submenuitemtwo.input';
import { UpdateSubmenuItemTwoInput } from './dto/update-submenuitemtwo.input';

@Resolver(() => SubmenuItemTwoEntity)
export class SubmenuItemTwoResolver {
  constructor(private readonly submenuItemTwoService: SubmenuItemTwoService) {}

  @Mutation(() => SubmenuItemTwoEntity)
  createSubmenuItem(@Args('createSubmenuItemInput') createSubmenuItemTwoInput: CreateSubmenuItemTwoInput) {
    return this.submenuItemTwoService.create(createSubmenuItemTwoInput);
  }

  @Query(() => [SubmenuItemTwoEntity])
  getAllSubmenuItems() {
    return this.submenuItemTwoService.findAll();
  }

  @Query(() => SubmenuItemTwoEntity)
  getSubmenuItemById(@Args('id', { type: () => Int }) id: number) {
    return this.submenuItemTwoService.findOne(id);
  }

  @Mutation(() => SubmenuItemTwoEntity)
  updateSubmenuItem(@Args('updateSubmenuItemInput') updateSubmenuItemTwoInput: UpdateSubmenuItemTwoInput) {
    return this.submenuItemTwoService.update(updateSubmenuItemTwoInput.id, updateSubmenuItemTwoInput);
  }

  @Mutation(() => SubmenuItemTwoEntity)
  removeSubmenuItem(@Args('id', { type: () => Int }) id: number) {
    return this.submenuItemTwoService.remove(id);
  }
}