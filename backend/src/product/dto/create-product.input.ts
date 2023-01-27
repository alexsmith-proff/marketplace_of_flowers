import { InputType, Field } from '@nestjs/graphql'
import { BrandEntity } from 'src/brand/entities/brand.entity'
import { Column } from 'typeorm'

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Name' })
  name: string

  @Field(() => String, { description: 'Slug', nullable: true })
  slug: string

  @Field(() => Number, { description: 'Price', nullable: true })
  price: number

  @Field(() => Number, { description: 'Count in stock', nullable: true })
  count_in_stock: number

  @Field(() => String, { description: 'Vendor code', nullable: true })
  vendor_code: string

  @Field(() => Number, { description: 'Brand', nullable: true })
  brand_id: number

  @Field(() => Number, { description: 'Catalog', nullable: true })
  catalog_id: number

  @Field(() => Number, { description: 'Main image index', nullable: true })
  main_image_index: number

  @Field(() => String, { description: 'Images', nullable: true })
  images: string  
}