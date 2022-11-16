import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { SortProductInput } from './dto/sort-product.input';
import { UpdateProductRelationsInput } from './dto/update-product-relations.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>){}

  async create(createProductInput: CreateProductInput): Promise<ProductEntity> {
    return await this.productRepository.save({...createProductInput, brand: {id: createProductInput.brand_id}, catalog: {id: createProductInput.catalog_id}})
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find({
      relations: {
        brand: true,
        catalog: true
      }
    })
  }

  async findAllBySort(sortProductInput: SortProductInput): Promise<ProductEntity[]> {
      return await this.productRepository.find({
        relations: {
          brand: true,
          catalog: true
        },
        order: {
          [sortProductInput.sort_field]: sortProductInput.sort_order
        }
      })    
  }

  async findOne(id: number): Promise<ProductEntity> {
    return this.productRepository.findOne({
      where: 
      {id},
      relations: {
        brand: true,
        catalog: true
      }
    })
  }

  async update(id: number, updateProductInput: UpdateProductInput): Promise<ProductEntity> {
    await this.productRepository.update(id, updateProductInput)
    return await this.findOne(id)
  }

 async updateRelations(updateProductRelationsInput: UpdateProductRelationsInput): Promise<ProductEntity> {
  const product = await this.findOne(updateProductRelationsInput.id)
  const newProduct = {...product, brand: {id: updateProductRelationsInput.brand_id}, catalog: {id: updateProductRelationsInput.catalog_id}}
  await this.productRepository.save(newProduct)   
  return await this.findOne(updateProductRelationsInput.id)
 }

  async remove(id: number): Promise<ProductEntity> {
    const product = await this.findOne(id)
    await this.productRepository.delete(id)
    return product
  }
}
