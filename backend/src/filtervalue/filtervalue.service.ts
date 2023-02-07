import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilterValueInput } from './dto/create-filtervalue.input';
import { UpdateFilterValueInput } from './dto/update-filtervalue.input';
import { FilterValueEntity } from './entities/filtervalue.entity';

var getSlug = require('speakingurl')

@Injectable()
export class FilterValueService {
  constructor(
    @InjectRepository(FilterValueEntity)
    private readonly filterValueRepository: Repository<FilterValueEntity>,
  ) { }
  async create(createFilterValueInput: CreateFilterValueInput): Promise<FilterValueEntity> {
    return await this.filterValueRepository.save({
      ...createFilterValueInput, slug: getSlug(createFilterValueInput.name),
      filter_element: createFilterValueInput.filter_element_id ? { id: createFilterValueInput.filter_element_id } : null
    })
  }

  async findAll(): Promise<FilterValueEntity[]> {
    return await this.filterValueRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} filtervalue`;
  }

  // update(id: number, updateFilterValueInput: UpdateFilterValueInput) {
  //   return `This action updates a #${id} filtervalue`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} filtervalue`;
  // }
}
