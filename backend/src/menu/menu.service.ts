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
    private readonly menuRepository: Repository<MenuEntity>
    ) {}

  async create(createMenuInput: CreateMenuInput): Promise<MenuEntity> {
    return await this.menuRepository.save({...createMenuInput})
  }

  async findAll(): Promise<MenuEntity[]> {
    return await this.menuRepository.find({
      relations: {
        item: true
      }
    })
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
    await this.menuRepository.update(id, updateMenuInput)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<MenuEntity> {
    const user = await this.findOne(id)
    await this.menuRepository.delete(id)
    return user
  }
}
