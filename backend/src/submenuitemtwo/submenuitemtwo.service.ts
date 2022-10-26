import { SubmenuItemTwoEntity } from './entities/submenuitemtwo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubmenuItemTwoInput } from './dto/create-submenuitemtwo.input';
import { UpdateSubmenuItemTwoInput } from './dto/update-submenuitemtwo.input';
import { Repository } from 'typeorm';

var getSlug = require('speakingurl');

@Injectable()
export class SubmenuItemTwoService {
  constructor(
    @InjectRepository(SubmenuItemTwoEntity)
    private readonly submenuItemRepository: Repository<SubmenuItemTwoEntity>,
  ) {}
  async create(
    createSubmenuItemTwoInput: CreateSubmenuItemTwoInput,
  ): Promise<SubmenuItemTwoEntity> {
    console.log('createSubmenuItemTwoInput', createSubmenuItemTwoInput);

    const newSubMenu = {
      ...createSubmenuItemTwoInput,
      submenuitem: { id: createSubmenuItemTwoInput.menuitem_id },
      link: getSlug(createSubmenuItemTwoInput.name)
    };
    console.log('newSubMenu', newSubMenu);
    return this.submenuItemRepository.save(newSubMenu);
  }

  async findAll(): Promise<SubmenuItemTwoEntity[]> {
    return await this.submenuItemRepository.find({
      relations: {
        submenuitem: true,
      },
    });
  }

  async findOne(id: number): Promise<SubmenuItemTwoEntity> {
    return await this.submenuItemRepository.findOne({
      where: {
        id,
      },
      relations: {
        submenuitem: true,
      },
    });
  }

  async update(
    id: number,
    updateSubmenuItemInput: UpdateSubmenuItemTwoInput,
  ): Promise<SubmenuItemTwoEntity> {
    const submenu = await this.findOne(id);
    const newSubMenu = {
      ...submenu,
      ...updateSubmenuItemInput,
      menuitem: { id: updateSubmenuItemInput.submenuitem_id },
    };
    console.log(newSubMenu);

    return await this.submenuItemRepository.save(newSubMenu);
  }

  async remove(id: number): Promise<SubmenuItemTwoEntity> {
    const submenu = await this.findOne(id);
    await this.submenuItemRepository.delete(id);
    return submenu;
  }
}
