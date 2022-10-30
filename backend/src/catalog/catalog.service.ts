import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatalogInput } from './dto/create-catalog.input';
import { UpdateCatalogInput } from './dto/update-catalog.input';
import { CatalogEntity } from './entities/catalog.entity';

@Injectable()
export class CatalogService {
  constructor(@InjectRepository(CatalogEntity) private readonly catalogRepository: Repository<CatalogEntity>){}

  async create(createCatalogInput: CreateCatalogInput): Promise<CatalogEntity> {
    let catalogParent
    if(typeof createCatalogInput['parent_id'] !== 'undefined'){
      catalogParent =  await this.findOne(createCatalogInput.parent_id)
    }
    console.log('createCatalogInput',{...createCatalogInput});
    
    return await this.catalogRepository.save({...createCatalogInput, parent: catalogParent})
  }

  async findAll() {
    const sortingArr = (arr) => {
      arr.sort((a, b) => a.serial_number - b.serial_number)
      arr.map((item) => {
        if (typeof item['children'] !== "undefined"){
          sortingArr(item.children)
        }
      })
      return arr
    }
    const catalogArr = await this.catalogRepository.manager.getTreeRepository(CatalogEntity).findTrees()
    return sortingArr(catalogArr)
  }

  async findOne(id: number) {
    return await this.catalogRepository.findOne({
      where: {
        id: id
      }
    })
  }

  // async update(id: number, updateCatalogInput: UpdateCatalogInput): Promise<CatalogEntity> {
  //   const item = await this.findOne(id)
  //   const newItem = {...item, ...updateCatalogInput}
  //   return await this.catalogRepository.save(newItem)
  // }

  // async remove(id: number): Promise<CatalogEntity> {
  //   const item = await this.findOne(id)
  //   await this.catalogRepository.delete(id)
  //   return item
  // }
}
