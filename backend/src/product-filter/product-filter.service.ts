import { Injectable } from '@nestjs/common';
import { CreateProductFilterInput } from './dto/create-product-filter.input';
import { UpdateProductFilterInput } from './dto/update-product-filter.input';

@Injectable()
export class ProductFilterService {
  create(createProductFilterInput: CreateProductFilterInput) {
    return 'This action adds a new productFilter';
  }

  findAll() {
    return `This action returns all productFilter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productFilter`;
  }

  update(id: number, updateProductFilterInput: UpdateProductFilterInput) {
    return `This action updates a #${id} productFilter`;
  }

  remove(id: number) {
    return `This action removes a #${id} productFilter`;
  }
}
