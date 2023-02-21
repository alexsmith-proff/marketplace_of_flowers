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
      ...createFilterValueInput,
      slug: getSlug(createFilterValueInput.name),
      value: createFilterValueInput.name,
      filter_element: createFilterValueInput.filter_element_id ? { id: createFilterValueInput.filter_element_id } : null
    })
  }

  async findAll(): Promise<FilterValueEntity[]> {
    return await this.filterValueRepository.find()
  }

  async findOne(id: number) {
    return await this.filterValueRepository.findOne({
      where:
        { id }
    })
  }

  async update(id: number, updateFilterValueInput: UpdateFilterValueInput) {
    const filterValue = await this.findOne(id);

    let newFilterValue = {...filterValue, 
      ...updateFilterValueInput, 
    }
    if(updateFilterValueInput.name && !updateFilterValueInput.slug){
      newFilterValue = {...newFilterValue, slug : getSlug(updateFilterValueInput.name)}
    } 
    if(updateFilterValueInput.name && !updateFilterValueInput.value){
      newFilterValue = {...newFilterValue, value : updateFilterValueInput.name}
    } 

    return await this.filterValueRepository.save(newFilterValue);
  }

  async remove(id: number) {
    const filterValue = await this.findOne(id)
    await this.filterValueRepository.delete(id)
    return filterValue
  }
}
