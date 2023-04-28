import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createFile } from 'src/util/file';
import { Any, ArrayContainedBy, ArrayContains, ArrayOverlap, Between, DataSource, In, Raw, Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { SortProductInput } from './dto/sort-product.input';
import { UpdateProductRelationsInput } from './dto/update-product-relations.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductEntity } from './entities/product.entity';
import { IFilterOderData } from 'src/interfaces/filter.interface';
import { FilterDataType } from 'src/enums/filter.enums';


let getSlug = require('speakingurl')

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>) { }

  async createAPI(files: Array<Express.Multer.File>, createProductInput: CreateProductInput): Promise<ProductEntity> {
    // console.log('file', file);
    // console.log('createProductInput', createProductInput);

    const fileNames: string[] = []
    let main_image = ''
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        let fileName = createFile(files[i])
        //no save to 'static'
        fileNames.push(fileName)
        if (createProductInput.main_image_index == i) {
          main_image = fileName
        }
      }
      if (createProductInput.main_image_index == -1) {
        main_image = fileNames[0]
      }
    }

    const prepareProduct = {
      ...createProductInput,
      brand: createProductInput.brand_id ? { id: createProductInput.brand_id } : null,
      catalog: createProductInput.catalog_id ? { id: createProductInput.catalog_id } : null,
      main_image, filenames_images: fileNames
    }
    delete prepareProduct.main_image_index
    const newProduct = await this.productRepository.save(prepareProduct)

    // const prepareProductFilter: CreateProductFilterInput = { name: createProductInput.name, slug: getSlug(createProductInput.name), value: 'sdsd' }
    // const newProductFilter = await this.productFilterRepository.save(prepareProductFilter)

    // console.log(newProduct);

    return newProduct
  }

  async createNoFiles(createProductInput: CreateProductInput): Promise<ProductEntity> {
    return await this.productRepository.save({
      ...createProductInput,
      slug: createProductInput.slug ? createProductInput.slug : getSlug(createProductInput.name),
      brand: createProductInput.brand_id ? { id: createProductInput.brand_id } : null,
      catalog: createProductInput.catalog_id ? { id: createProductInput.catalog_id } : null
    })
  }


  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find({
      relations: {
        brand: true,
        catalog: true
      }
    })
  }

  async findByFilter(filter: IFilterOderData): Promise<ProductEntity[]> {
    let filterData = {}
    filter.filters.map(item => {
      if (item.type == FilterDataType.priceMinMax) {
        filterData = { price: Between(item.values[0], item.values[1]) }
      }
    })
    filterData = {
      ...filterData, filters: [...filter.filters.map(item => {
        switch (item.type) {
          case FilterDataType.OneData:
            return { name: item.nameFilter, value: item.values[0] }
            break
          case FilterDataType.ManyData:
            // Any выбирает из массива
            return { name: item.nameFilter, value: Any(item.values) }
            break
        }

      })
      ]
    }

    console.log('filterData', filterData);
    


    return await this.productRepository.find({
      // relations: {
      //   brand: true,
      //   catalog: true
      // },
      where: filterData,
      // where: {        
      //   filters: [
      //     {
      //       name: 'Цвета',
      //       value: 'Желтый'
      //     },
      //     {
      //       name: 'Кому',
      //       value: 'Маме'
      //     }
      //   ]
      // }

      order: {
        price: filter.order === 'Сначала дешевые' ? 'ASC' : 'DESC'
        // price: sort
      }
    })
  }

  async findAllBySort(sortProductInput: SortProductInput): Promise<ProductEntity[]> {
    return await this.productRepository.find({
      relations: {
        brand: true,
        catalog: true
      },
      order: {
        [sortProductInput.sort_field]: sortProductInput.sort_order
      }
    })
  }

  async findOne(id: number): Promise<ProductEntity> {
    console.log('qqqqqqqqqqqiddd', id);

    return this.productRepository.findOne({
      where:
        { id },
      relations: {
        brand: true,
        catalog: true
      }
    })
  }

  async findMinMaxPrice() {
    const products: ProductEntity[] = await this.productRepository.find()
    const minPrice = Math.min(...products.map(item => item.price))
    const maxPrice = Math.max(...products.map(item => item.price))

    console.log({ minPrice, maxPrice });


    return { minPrice, maxPrice }
    // return 'aaaaa'
  }

  async update(id: number, updateProductInput: UpdateProductInput): Promise<ProductEntity> {
    await this.productRepository.update(id, updateProductInput)
    return await this.findOne(id)
  }

  async updateRelations(updateProductRelationsInput: UpdateProductRelationsInput): Promise<ProductEntity> {
    const product = await this.findOne(updateProductRelationsInput.id)
    const newProduct = { ...product, brand: { id: updateProductRelationsInput.brand_id }, catalog: { id: updateProductRelationsInput.catalog_id } }
    await this.productRepository.save(newProduct)
    return await this.findOne(updateProductRelationsInput.id)
  }

  async remove(id: number): Promise<ProductEntity> {
    const product = await this.findOne(id)
    await this.productRepository.delete(id)
    return product
  }
}
