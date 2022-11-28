import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { MenuEntity } from './entities/menu.entity';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';

@Resolver(() => MenuEntity)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @Mutation(() => MenuEntity)
  createMenu(@Args('createMenuInput') createMenuInput: CreateMenuInput) {
    return this.menuService.create(createMenuInput);
  }

  @Query(() => [MenuEntity], { name: 'getAllMenus' })
  findAll() {
    return this.menuService.findAll();
  }

  @Query(() => MenuEntity, { name: 'getMenuBySlug' })
  findBySlug(@Args('slug', {type: () => String}) slug: string) {
    return this.menuService.findBySlug(slug);
  }

  @Query(() => MenuEntity, { name: 'getMenuByID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    console.log('id = ', id);
    
    return this.menuService.findOne(id);
  }

  @Mutation(() => MenuEntity)
  updateMenu(@Args('updateMenuInput') updateMenuInput: UpdateMenuInput) {
    return this.menuService.update(updateMenuInput.id, updateMenuInput);
  }

  @Mutation(() => MenuEntity)
  removeMenu(@Args('id', { type: () => Int }) id: number) {
    return this.menuService.remove(id);
  }
}
