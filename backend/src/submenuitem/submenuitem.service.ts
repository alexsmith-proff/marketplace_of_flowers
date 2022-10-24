import { SubmenuItemEntity } from './entities/submenuitem.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubmenuItemInput } from './dto/create-submenuitem.input';
import { UpdateSubmenuItemInput } from './dto/update-submenuitem.input';
import { Repository } from 'typeorm';

@Injectable()
export class SubmenuItemService {
  constructor(
    @InjectRepository(SubmenuItemEntity)
    private readonly submenuItemRepository: Repository<SubmenuItemEntity>
  ) {}
  async create(createSubmenuItemInput: CreateSubmenuItemInput): Promise<SubmenuItemEntity> {
    const newSubMenu = {...createSubmenuItemInput,  menuitem: { id: createSubmenuItemInput.menuitem_id } }
    console.log('newSubMenu', newSubMenu);
    
    return this.submenuItemRepository.save(newSubMenu)
  }

  async findAll(): Promise<SubmenuItemEntity[]> {
    return await this.submenuItemRepository.find({
      relations: {
        menuitem: true
      }
    })
  }

  async findOne(id: number): Promise<SubmenuItemEntity> {
    return await this.submenuItemRepository.findOne({
      where: {
        id
      },
      relations: {
        menuitem: true
      }
    })
  }

  async update(id: number, updateSubmenuItemInput: UpdateSubmenuItemInput): Promise<SubmenuItemEntity> {
    const submenu = await this.findOne(id)
    const newSubMenu = {...submenu, ...updateSubmenuItemInput, menuitem: { id: updateSubmenuItemInput.menuitem_id }}
    console.log(newSubMenu);
    
    return await this.submenuItemRepository.save(newSubMenu)
  }

  async remove(id: number): Promise <SubmenuItemEntity> {
    const submenu = await this.findOne(id)
    await this.submenuItemRepository.delete(id)
    return submenu
  }
}
