import { MenuEntity } from './entities/menu.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { Repository } from 'typeorm';

var getSlug = require('speakingurl');

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
  ) {}

  async create(createMenuInput: CreateMenuInput): Promise<MenuEntity> {
    return await this.menuRepository.save({...createMenuInput, slug: getSlug(createMenuInput.name) });
  }

  async findAll(): Promise<MenuEntity[]> {
    const menu = await this.menuRepository.find({
      order: {
        serial_number: 'ASC',
        items: {
          serial_number: 'ASC',
          submenuitems: {
            serial_number: 'ASC',
            submenuitems: {
              serial_number: 'ASC'
            }
          }
        }
        
      }
    });
    // console.log('menu', menu);
    return menu;
  }

  async findBySlug(slug: string): Promise<MenuEntity> {
    const menu = await this.menuRepository.findOne({
      where: {
        slug
      },
      order: {
        serial_number: 'ASC',
        items: {
          serial_number: 'ASC',
          submenuitems: {
            serial_number: 'ASC',
            submenuitems: {
              serial_number: 'ASC'
            }
          }
        }
        
      }
    });
    // console.log('menu', menu);
    return menu;
  }

  async findOne(id: number): Promise<MenuEntity> {
    return await this.menuRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        items: true,
      },
    });
  }

  async update(
    id: number,
    updateMenuInput: UpdateMenuInput,
  ): Promise<MenuEntity> {
    // console.log('updateMenu');

    await this.menuRepository.update(id, updateMenuInput);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<MenuEntity> {
    const menu = await this.findOne(id);
    await this.menuRepository.delete(id);
    return menu;
  }
}
