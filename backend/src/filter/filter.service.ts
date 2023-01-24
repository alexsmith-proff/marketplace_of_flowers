import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilterInput } from './dto/create-filter.input';
import { UpdateFilterInput } from './dto/update-filter.input';
import { FilterEntity } from './entities/filter.entity';

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(FilterEntity)
    private readonly filterRepository: Repository<FilterEntity>,
  ) {}

  create(createFilterInput: CreateFilterInput) {
    return 'This action adds a new filter';
  }

  findAll() {
    return `This action returns all filter`;
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
