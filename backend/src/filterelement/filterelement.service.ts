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
    private readonly filterRepository: Repository<FilterElementEntity>,
  ) {}
  async create(createFilterElementInput: CreateFilterElementInput): Promise<FilterElementEntity> {
    return await this.filterRepository.save({...createFilterElementInput, slug: getSlug(createFilterElementInput.name)})
  }

  async findAll(): Promise<FilterElementEntity[]> {
    return await this.filterRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} filterelement`;
  }

  update(id: number, updateFilterElementInput: UpdateFilterElementInput) {
    return `This action updates a #${id} filterelement`;
  }

  remove(id: number) {
    return `This action removes a #${id} filterelement`;
  }
}
