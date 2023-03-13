import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { createFile } from 'src/util/file';
import { IsNull, Repository } from 'typeorm';
import { CreateCatalogInput } from './dto/create-catalog.input';
import { FindCatalogInput } from './dto/find-catalog.input';
import { UpdateCatalogInput } from './dto/update-catalog.input';
import { CatalogEntity } from './entities/catalog.entity';

let getSlug = require('speakingurl')

const sortingArr = (arr) => {
  arr.sort((a, b) => a.serial_number - b.serial_number);
  arr.map((item) => {
    if (typeof item['children'] !== 'undefined') {
      sortingArr(item.children);
    }
  });
  return arr;
};

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(CatalogEntity)
    private readonly catalogRepository: Repository<CatalogEntity>,
  ) {}

  async create(createCatalogInput: CreateCatalogInput): Promise<CatalogEntity> {
    let catalogParent;
    if (typeof createCatalogInput['parent_id'] !== 'undefined') {
      if (createCatalogInput.parent_id == null) {
        catalogParent = null;
      } else {
        catalogParent = await this.findOne(createCatalogInput.parent_id);
      }
    }
    console.log('createCatalogInput', { ...createCatalogInput });

    return await this.catalogRepository.save({
      ...createCatalogInput,
      slug: createCatalogInput.slug ? createCatalogInput.slug : getSlug(createCatalogInput.name),
      parent: catalogParent,
    });
  }

  async createAPI(files: Array<Express.Multer.File>, createCatalogInput: CreateCatalogInput): Promise<CatalogEntity> {
    let catalogParent;
    if (typeof createCatalogInput['parent_id'] !== 'undefined') {
      if (createCatalogInput.parent_id == null) {
        catalogParent = null;
      } else {
        catalogParent = await this.findOne(createCatalogInput.parent_id);
      }
    }
    console.log('createCatalogInput', { ...createCatalogInput });

    const fileNames: string[] = []
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          let fileName = createFile(files[i])
          //no save to 'static'
          fileNames.push(fileName)
        }
      }


    return await this.catalogRepository.save({
      ...createCatalogInput,
      slug: createCatalogInput.slug ? createCatalogInput.slug : getSlug(createCatalogInput.name),
      parent: catalogParent,
      filenames_images: fileNames
    });
  }


  async findAll() {
    return this.catalogRepository.find()
  }

  async findAllTree() {
    const catalogArr = await this.catalogRepository.manager
      .getTreeRepository(CatalogEntity)
      .findTrees();
    return sortingArr(catalogArr);
  }

  async findOne(id: number) {
    return await this.catalogRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByParent(
    findCatalogInput: FindCatalogInput,
  ): Promise<CatalogEntity[]> {
    const findParent = await this.findOne(findCatalogInput.parent_id);
    if (findParent === null) {
      const catalog = await this.catalogRepository.find({
        where: {
          parent: IsNull(),
        },
        relations: {
          children: true,
        },
      });
      return sortingArr(catalog);
    }
    // else {
    //   const catalog = await this.catalogRepository.find({
    //     where: {
    //       parent: findParent,
    //     },
    //     relations: {
    //       children: true,
    //       parent: true,
    //     },
    //   });
    //   return sortingArr(catalog);
    // }
  }



  async updateAPI(files: Array<Express.Multer.File>, updateCatalogInput: UpdateCatalogInput): Promise<CatalogEntity> {
    console.log('updateCatalogInput', { ...updateCatalogInput });
    console.log('updateCatalogInput.id', updateCatalogInput.id);
    
    const item = await this.findOne(updateCatalogInput.id)
    console.log('updateCatalogInputitemmmm', item);

    const fileNames: string[] = []
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          let fileName = createFile(files[i])
          //no save to 'static'
          fileNames.push(fileName)
        }
      }


    return await this.catalogRepository.save({
      ...item,
      // ...updateCatalogInput,
      filenames_images: fileNames
    });
  }



  async update(
    id: number,
    updateCatalogInput: UpdateCatalogInput,
  ): Promise<CatalogEntity> {
    const item = await this.findOne(id);
    const newItem = { ...item, ...updateCatalogInput };
    return await this.catalogRepository.save(newItem);
  }

  async remove(id: number): Promise<CatalogEntity> {
    const item = await this.findOne(id);
    await this.catalogRepository.delete(id);
    return item;
  }
}
