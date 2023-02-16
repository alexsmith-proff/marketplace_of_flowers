import { SectionEntity } from './entities/section.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { Repository } from 'typeorm';

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
      order: {
        createdAt: 'ASC'
      },
      relations:{
        elements: {
          product_ref: true
        }
      }
    })
  }

  async findBySlug(slug: string): Promise<SectionEntity> {
    const section = await this.sectionRepository.findOne({
      where: {
        slug
      },
      relations: {
        elements: {
          product_ref: true
        }
      },
      order: {
        elements: {
          id: 'ASC',
          text_elements: {
            id: 'ASC'
          },
          img_elements: {
              id: 'ASC'
            }
          }
        }
        
      }
    );
    return section;
  }

  async findOne(id: number): Promise<SectionEntity> {
    return await this.sectionRepository.findOne({
      where: {
        id
      },
      relations: {
        elements: true
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