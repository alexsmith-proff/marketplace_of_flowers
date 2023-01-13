import { ImgElementEntity } from './entities/imgelement.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImgElementInput } from './dto/create-imgelement.input';
import { Repository } from 'typeorm';
import { createFile, deleteFile } from '../util/file';
import { DeleteImgElementInput } from './dto/delete-imgelement.input';

@Injectable()
export class ImgElementService {
  constructor(
    @InjectRepository(ImgElementEntity)
    private readonly imgElementRepository: Repository<ImgElementEntity>
  ){}

  async create(file: Express.Multer.File,  createImgElementInput: CreateImgElementInput) {
    const fileName = createFile(file)
    const newImgElement = {...createImgElementInput, filename: fileName, element_ref: {id: createImgElementInput.element_id}}
    return await this.imgElementRepository.save(newImgElement)
  }

  async findBySlug(slug: string): Promise<ImgElementEntity> {
    return await this.imgElementRepository.findOne({
      where: {
        slug
      }
    })
  }

  // async findAll(): Promise<ImgElementEntity[]> {
  //   return await this.imgElementRepository.find({
  //     relations:{
  //       element_ref: true
  //     }
  //   })
  // }

  // async findOne(id: number): Promise<ImgElementEntity> {
  //   return await this.imgElementRepository.findOne({
  //     where: {
  //       id
  //     },
  //     relations:{
  //       element_ref: true
  //     }
  //   })
  // }

  // async update(id: number, updateImgElementInput: UpdateImgElementInput): Promise<ImgElementEntity> {
  //   await this.imgElementRepository.update(id, updateImgElementInput)
  //   return await this.findOne(id)
  // }

  async remove(deleteImgElementInput: DeleteImgElementInput): Promise<number> {
    console.log('deleteImgElementInput', deleteImgElementInput);
    
    await this.imgElementRepository.delete(deleteImgElementInput.id)
    
    deleteFile(deleteImgElementInput.fileName)
    return deleteImgElementInput.id
  }

}
