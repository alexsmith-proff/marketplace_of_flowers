import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilterElementInput } from './dto/create-filterelement.input';
// import { FilterEntity } from 'src/filter/entities/filter.entity';
import { UpdateFilterElementInput } from './dto/update-filterelement.input';
import { FilterElementEntity } from './entities/filterelement.entity';

var getSlug = require('speakingurl'); 

@Injectable()
export class FilterElementService {
  constructor(
    @InjectRepository(FilterElementEntity)
    private readonly filterElementRepository: Repository<FilterElementEntity>,
  ) {}
  async create(createFilterElementInput: CreateFilterElementInput): Promise<FilterElementEntity> {
    return await this.filterElementRepository.save({...createFilterElementInput, slug: getSlug(createFilterElementInput.name), filter_item: { id: createFilterElementInput.filter_id }})
  }

  async findAll(): Promise<FilterElementEntity[]> {
    return await this.filterElementRepository.find()
  }

  async findOne(id: number) {
    return await this.filterElementRepository.findOne({
      where:
        { id }
    })
  }

  async update(id: number, updateFilterElementInput: UpdateFilterElementInput) {
    const filterElement = await this.findOne(id);
    const newFilterElement = {...filterElement, 
      ...updateFilterElementInput, 
      slug: updateFilterElementInput.slug ? updateFilterElementInput.slug : getSlug(updateFilterElementInput.name)
    };

    console.log('newFilterrr', newFilterElement);

    return await this.filterElementRepository.save(newFilterElement);
  }

  async remove(id: number) {
    const filterElement = await this.findOne(id)
    await this.filterElementRepository.delete(id)
    return filterElement
  }
}
