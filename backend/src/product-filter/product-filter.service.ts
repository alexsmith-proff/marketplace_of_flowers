import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductFilterInput } from './dto/create-product-filter.input';
import { UpdateProductFilterInput } from './dto/update-product-filter.input';
import { ProductFilterEntity } from './entities/product-filter.entity';

@Injectable()
export class ProductFilterService {
  constructor(
    @InjectRepository(ProductFilterEntity)
    private readonly productFilterRepository: Repository<ProductFilterEntity>,
  ) { }

  async create(createProductFilterInput: CreateProductFilterInput): Promise<ProductFilterEntity> {
    return await this.productFilterRepository.save({...createProductFilterInput,
      product: createProductFilterInput.product_id ? {id: createProductFilterInput.product_id} : null})
  }

  async findAll(): Promise<ProductFilterEntity[]> {
    return await this.productFilterRepository.find()
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
