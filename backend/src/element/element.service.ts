import { ElementEntity } from './entities/element.entity';
import { Injectable } from '@nestjs/common';
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
    const newElement = {...createElementInput, section_ref: {id: createElementInput.section_id}}
    return await this.elementRepository.save(newElement)
  }

  async findAll(): Promise<ElementEntity[]> {
    return await this.elementRepository.find({
      relations:{
        text_elements: true,
        img_elements: true        
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
        img_elements: true
      }
      
    })
  }

  async update(id: number, updateElementInput: UpdateElementInput): Promise<ElementEntity> {
    await this.elementRepository.update(id, updateElementInput)    
    return await this.findOne(id)
  }

  async remove(id: number): Promise<ElementEntity> {
    const element = await this.findOne(id)
    await this.elementRepository.delete(id)
    return element
  }
}
