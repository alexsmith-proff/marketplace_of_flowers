import { ElementEntity } from './entities/element.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateElementInput } from './dto/create-element.input';
import { UpdateElementInput } from './dto/update-element.input';

@Injectable()
export class ElementService {
  constructor(
    @InjectRepository(ElementEntity)
    private readonly elementRepository: Repository<ElementEntity>
    ){}

  async create(createElementInput: CreateElementInput): Promise<ElementEntity> {
    const newElement = {...createElementInput,
      section_ref: {id: createElementInput.section_id}, 
      product: createElementInput.product_id ? {id: createElementInput.product_id} : null
    }
    return await this.elementRepository.save(newElement)
  }

  async findAll(): Promise<ElementEntity[]> {
    return await this.elementRepository.find({
      relations:{
        text_elements: true,
        img_elements: true,
        product: true
      },
      order: {
        createdAt: 'DESC'
      }
    })
  }

  async findOne(id: number): Promise<ElementEntity> {
    return await this.elementRepository.findOne({
      where: {
        id
      },
      relations: {
        text_elements: true,
        img_elements: true,
        product: true,
      }
      
    })
  }

  async update(id: number, updateElementInput: UpdateElementInput) {
    const element = await this.findOne(id);
    const newElement = {
      ...element,
      ...updateElementInput,
      // product: updateElementInput.product_id ? {id: updateElementInput.product_id} : null
    };
    // delete newElement.product_id
    console.log('newElementnewElementnewElement', newElement);
    
    return await this.elementRepository.save(newElement);
  }



  async remove(id: number): Promise<ElementEntity> {
    const element = await this.findOne(id)
    await this.elementRepository.delete(id)
    return element
  }
}
