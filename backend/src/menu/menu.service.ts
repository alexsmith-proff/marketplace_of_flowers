import { SubmenuItemEntity } from './../submenuitem/entities/submenuitem.entity';
import { MenuEntity } from './entities/menu.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
    @InjectRepository(SubmenuItemEntity)
    private readonly submenuItemRepository: Repository<SubmenuItemEntity>
    ) {}

  async create(createMenuInput: CreateMenuInput): Promise<MenuEntity> {
    return await this.menuRepository.save({...createMenuInput})
  }

  async findAll(): Promise<MenuEntity[]> {
    // await this.submenuItemRepository.manager.getTreeRepository(SubmenuItemEntity).findTrees({
    //   relations: ["submenuitem"]
    // })
    const menu = await this.menuRepository.find()
    console.log('menu', menu);
    
    return menu
    // const treeCategoriesWithRelations = await this.menuRepository.manager.getTreeRepository(MenuEntity).findTrees()
    // console.log('treeCategoriesWithRelations = ', treeCategoriesWithRelations);
    
    // return treeCategoriesWithRelations 
  }

  async findOne(id: number): Promise<MenuEntity> {
    return await this.menuRepository.findOne({
      where:{
        id: id
      },
      relations: {
        item: true
      }
    })
  }

  async update(id: number, updateMenuInput: UpdateMenuInput): Promise<MenuEntity> {
    console.log('updateMenu');
    
    await this.menuRepository.update(id, updateMenuInput)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<MenuEntity> {
    const user = await this.findOne(id)
    await this.menuRepository.delete(id)
    return user
  }
}
