import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuItemInput } from './dto/create-menuitem.input';
import { UpdateMenuItemInput } from './dto/update-menuitem.input';
import { Repository } from 'typeorm';
import { MenuItemEntity } from './entities/menuitem.entity';

var getSlug = require('speakingurl');

@Injectable()
export class MenuItemService {
  constructor(
    @InjectRepository(MenuItemEntity)
    private readonly menuItemRepository: Repository<MenuItemEntity>,
  ) {}

  async create(
    createMenuItemInput: CreateMenuItemInput,
  ): Promise<MenuItemEntity> {
    return await this.menuItemRepository.save({
      ...createMenuItemInput,
      menu: { id: createMenuItemInput.menu_id },
      link: getSlug(createMenuItemInput.name) 
    });
  }

  async findAll(): Promise<MenuItemEntity[]> {
    return await this.menuItemRepository.find({
      relations: {
        submenuitems: true,
      }
    });
  }

  async findOne(id: number): Promise<MenuItemEntity> {
    return await this.menuItemRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        submenuitems: true,
      },
    });
  }

  async update(id: number, updateMenuItemInput: UpdateMenuItemInput): Promise<MenuItemEntity> {
    await this.menuItemRepository.update(id, updateMenuItemInput);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<MenuItemEntity> {
    const user = await this.findOne(id);
    await this.menuItemRepository.delete(id);
    return user;
  }
}
