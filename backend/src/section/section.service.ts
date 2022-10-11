import { SectionEntity } from './entities/section.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(SectionEntity)
    private readonly sectionRepository: Repository<SectionEntity>
    ){}

  async create(createSectionInput: CreateSectionInput): Promise<SectionEntity> {
    return await this.sectionRepository.save({...createSectionInput})
  }

  async findAll(): Promise<SectionEntity[]> {
    return await this.sectionRepository.find({
      relations:{
        text_sections: true,
        img_sections: true        
      }
    })
  }

  async findOne(id: number): Promise<SectionEntity> {
    return await this.sectionRepository.findOne({
      where: {
        id
      },
      relations: {
        text_sections: true
      }
      
    })
  }

  async update(id: number, updateSectionInput: UpdateSectionInput): Promise<SectionEntity> {
    await this.sectionRepository.update(id, updateSectionInput)    
    return await this.findOne(id)
  }

  async remove(id: number): Promise<SectionEntity> {
    const section = await this.findOne(id)
    await this.sectionRepository.delete(id)
    return section
  }
}
