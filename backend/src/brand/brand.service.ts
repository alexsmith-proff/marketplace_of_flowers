import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { BrandEntity } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(@InjectRepository(BrandEntity) private readonly brandRepository: Repository<BrandEntity>){}
  async create(createBrandInput: CreateBrandInput): Promise<BrandEntity> {
    return await this.brandRepository.save({...createBrandInput})
  }

  async findAll(): Promise<BrandEntity[]> {
    return await this.brandRepository.find()
  }

  async findOne(id: number): Promise<BrandEntity> {
    return await this.brandRepository.findOne({
      where: {
        id
      },
      
    })
  }

  async update(id: number, updateBrendInput: UpdateBrandInput): Promise<BrandEntity> {
    await this.brandRepository.update(id, updateBrendInput)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<BrandEntity> {
    const brand = await this.findOne(id)
    await this.brandRepository.delete(id)
    return brand
  }
}
