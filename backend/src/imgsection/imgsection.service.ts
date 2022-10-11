import { ImgSectionEntity } from './entities/imgsection.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImgSectionInput } from './dto/create-imgsection.input';
import { UpdateImgSectionInput } from './dto/update-imgsection.input';
import { Repository } from 'typeorm';

@Injectable()
export class ImgSectionService {
  constructor(
    @InjectRepository(ImgSectionEntity)
    private readonly imgSectionRepository: Repository<ImgSectionEntity>
  ){}
  async create(createImgSectionInput: CreateImgSectionInput): Promise<ImgSectionEntity> {
    const newImgSection = {...createImgSectionInput, section_ref: {id: createImgSectionInput.section_id}}
    return await this.imgSectionRepository.save(newImgSection)
  }

  async findAll(): Promise<ImgSectionEntity[]> {
    return await this.imgSectionRepository.find({
      relations:{
        section_ref: true
      }
    })
  }

  async findOne(id: number): Promise<ImgSectionEntity> {
    return await this.imgSectionRepository.findOne({
      where: {
        id
      },
      relations:{
        section_ref: true
      }
    })
  }

  async update(id: number, updateImgSectionInput: UpdateImgSectionInput): Promise<ImgSectionEntity> {
    await this.imgSectionRepository.update(id, updateImgSectionInput)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<ImgSectionEntity> {
    const imgSection = await this.findOne(id)
    await this.imgSectionRepository.delete(id)
    return imgSection
  }
}
