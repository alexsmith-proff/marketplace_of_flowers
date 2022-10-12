import { ImgElementEntity } from './entities/imgelement.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImgElementInput } from './dto/create-imgelement.input';
import { UpdateImgElementInput } from './dto/update-imgelement.input';
import { Repository } from 'typeorm';

@Injectable()
export class ImgElementService {
  constructor(
    @InjectRepository(ImgElementEntity)
    private readonly imgElementRepository: Repository<ImgElementEntity>
  ){}
  async create(createImgElementInput: CreateImgElementInput): Promise<ImgElementEntity> {
    const newImgElement = {...createImgElementInput, element_ref: {id: createImgElementInput.element_id}}
    return await this.imgElementRepository.save(newImgElement)
  }

  async findAll(): Promise<ImgElementEntity[]> {
    return await this.imgElementRepository.find({
      relations:{
        element_ref: true
      }
    })
  }

  async findOne(id: number): Promise<ImgElementEntity> {
    return await this.imgElementRepository.findOne({
      where: {
        id
      },
      relations:{
        element_ref: true
      }
    })
  }

  async update(id: number, updateImgElementInput: UpdateImgElementInput): Promise<ImgElementEntity> {
    await this.imgElementRepository.update(id, updateImgElementInput)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<ImgElementEntity> {
    const imgElement = await this.findOne(id)
    await this.imgElementRepository.delete(id)
    return imgElement
  }
}
