import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilterInput } from './dto/create-filter.input';
import { UpdateFilterInput } from './dto/update-filter.input';
import { FilterEntity } from './entities/filter.entity';

var getSlug = require('speakingurl');

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(FilterEntity)
    private readonly filterRepository: Repository<FilterEntity>,
  ) { }

  async create(createFilterInput: CreateFilterInput): Promise<FilterEntity> {
    // console.log('createFilterInput', createFilterInput);
    return await this.filterRepository.save({ ...createFilterInput, slug: getSlug(createFilterInput.name) })
  }

  async findAll(): Promise<FilterEntity[]> {
    return await this.filterRepository.find()
  }

  async findOne(id: number) {
    return await this.filterRepository.findOne({
      where:
        { id }
    })
  }

  async update(id: number, updateFilterInput: UpdateFilterInput) {
    const filter = await this.findOne(id);
    console.log('filterrrrrrr', filter);
    
    const newFilter = {...filter, ...updateFilterInput, slug: getSlug(updateFilterInput.name)};

    console.log('newFilterrr', newFilter);

    return await this.filterRepository.save(newFilter);
  }

  async remove(id: number) {
    const filter = await this.findOne(id)
    await this.filterRepository.delete(id)
    return filter
  }
}
