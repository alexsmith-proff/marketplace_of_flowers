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
  ) {}

  async create(createFilterInput: CreateFilterInput): Promise<FilterEntity> {
    // console.log('createFilterInput', createFilterInput);
    return await this.filterRepository.save({...createFilterInput, slug: getSlug(createFilterInput.name)})
  }

  async findAll(): Promise<FilterEntity[]> {
    return await this.filterRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} filter`;
  }

  update(id: number, updateFilterInput: UpdateFilterInput) {
    return `This action updates a #${id} filter`;
  }

  remove(id: number) {
    return `This action removes a #${id} filter`;
  }
}
