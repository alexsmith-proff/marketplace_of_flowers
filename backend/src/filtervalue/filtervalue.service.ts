import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilterValueInput } from './dto/create-filtervalue.input';
import { UpdateFilterValueInput } from './dto/update-filtervalue.input';
import { FilterValueEntity } from './entities/filtervalue.entity';

@Injectable()
export class FilterValueService {
  constructor(
    @InjectRepository(FilterValueEntity)
    private readonly filterValueRepository: Repository<FilterValueEntity>,
  ) {}
  async create(createFilterValueInput: CreateFilterValueInput): Promise<FilterValueEntity> {
    return await this.filterValueRepository.save({...createFilterValueInput})
  }

  async findAll(): Promise<FilterValueEntity[]> {
    return await this.filterValueRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} filtervalue`;
  }

  update(id: number, updateFilterValueInput: UpdateFilterValueInput) {
    return `This action updates a #${id} filtervalue`;
  }

  remove(id: number) {
    return `This action removes a #${id} filtervalue`;
  }
}
