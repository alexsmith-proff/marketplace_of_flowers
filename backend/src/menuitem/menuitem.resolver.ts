import { MenuItemService } from './menuitem.service';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateMenuItemInput } from './dto/create-menuitem.input';
import { UpdateMenuItemInput } from './dto/update-menuitem.input';
import { MenuItemEntity } from './entities/menuitem.entity';

@Resolver(() => MenuItemEntity)
export class MenuItemResolver {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Mutation(() => MenuItemEntity)
  createMenuItem(@Args('createMenuItemInput') createMenuItemInput: CreateMenuItemInput) {
    return this.menuItemService.create(createMenuItemInput);
  }

  @Query(() => [MenuItemEntity], { name: 'getAllMenuItem' })
  findAll() {
    return this.menuItemService.findAll();
  }

  @Query(() => MenuItemEntity, { name: 'getMenuItemByID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.menuItemService.findOne(id);
  }

  @Mutation(() => MenuItemEntity)
  updateMenu(@Args('updateMenuItemInput') updateMenuItemInput: UpdateMenuItemInput) {
    return this.menuItemService.update(updateMenuItemInput.id, updateMenuItemInput);
  }

  @Mutation(() => MenuItemEntity)
  removeMenu(@Args('id', { type: () => Int }) id: number) {
    return this.menuItemService.remove(id);
  }
}
