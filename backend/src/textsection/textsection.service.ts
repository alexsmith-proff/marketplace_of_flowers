import { TextSectionEntity } from './entities/textsection.entity';
import { Injectable } from '@nestjs/common';
import { CreateTextSectionInput } from './dto/create-textsection.input';
import { UpdateTextSectionInput } from './dto/update-textsection.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TextSectionService {
  constructor(
    @InjectRepository(TextSectionEntity) 
    private readonly textSectionRepository: Repository<TextSectionEntity>   
  ){}

  async create(createTextSectionInput: CreateTextSectionInput): Promise<TextSectionEntity> {
    const newTextSection = {...createTextSectionInput, section_ref: {id: createTextSectionInput.section_id}}
    return await this.textSectionRepository.save(newTextSection)
  }

  async findAll(): Promise<TextSectionEntity[]> {
    return this.textSectionRepository.find({
      relations: {
        section_ref: true
      }
    })
  }

  async findOne(id: number): Promise<TextSectionEntity> {
    return this.textSectionRepository.findOne({
      where: {
        id        
      },
      relations: {
        section_ref: true
      }
    })
  }

  async update(id: number, updateTextSectionInput: UpdateTextSectionInput): Promise<TextSectionEntity> {
    this.textSectionRepository.update(id, updateTextSectionInput)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<TextSectionEntity> {
    const textSection = this.findOne(id)
    await this.textSectionRepository.delete(id)
    return textSection
  }
}
