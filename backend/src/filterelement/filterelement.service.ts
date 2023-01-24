import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilterElementInput } from './dto/create-filterelement.input';
// import { FilterEntity } from 'src/filter/entities/filter.entity';
import { UpdateFilterElementInput } from './dto/update-filterelement.input';
import { FilterElementEntity } from './entities/filterelement.entity';

@Injectable()
export class FilterElementService {
  constructor(
    @InjectRepository(FilterElementEntity)
    private readonly filterRepository: Repository<FilterElementEntity>,
  ) {}
  create(createFilterElementInput: CreateFilterElementInput) {
    return 'This action adds a new filterelement';
  }

  findAll() {
    return `This action returns all filterelement`;
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
