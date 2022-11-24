import { TextElementEntity } from './entities/textelement.entity';
import { Injectable } from '@nestjs/common';
import { CreateTextElementInput } from './dto/create-textelement.input';
import { UpdateTextElementInput } from './dto/update-textelement.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TextElementService {
  constructor(
    @InjectRepository(TextElementEntity) 
    private readonly textElementRepository: Repository<TextElementEntity>   
  ){}

  async create(createTextElementInput: CreateTextElementInput): Promise<TextElementEntity> {
    const newTextElement = {...createTextElementInput, element_ref: {id: createTextElementInput.element_id}}
    return await this.textElementRepository.save(newTextElement)
  }

  async findAll(): Promise<TextElementEntity[]> {
    return this.textElementRepository.find({
      relations: {
        element_ref: true
      }
    })
  }

  async findOne(id: number): Promise<TextElementEntity> {
    return this.textElementRepository.findOne({
      where: {
        id        
      },
      order: {
        createdAt: 'DESC'
      },
      relations: {
        element_ref: true
      }
    })
  }

  async update(id: number, updateTextElementInput: UpdateTextElementInput): Promise<TextElementEntity> {
    this.textElementRepository.update(id, updateTextElementInput)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<TextElementEntity> {
    const textElement = this.findOne(id)
    await this.textElementRepository.delete(id)
    return textElement
  }
}
