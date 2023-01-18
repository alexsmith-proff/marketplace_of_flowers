import { InputType, Field } from '@nestjs/graphql'
import { BrandEntity } from 'src/brand/entities/brand.entity'
import { Column } from 'typeorm'

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Name' })
  name: string

  @Field(() => String, { description: 'Slug' })
  slug: string

  @Field(() => Number, { description: 'Price', nullable: true})
  @Column({nullable: true})
  price: number

  @Field(() => Number, { description: 'Count in stock', nullable: true})
  count_in_stock: number

  @Field(() => String, { description: 'Vendor code', nullable: true})
  vendor_code: string

  @Field(() => Number, { description: 'Brand', nullable: true})
  brand_id: number

  @Field(() => Number, { description: 'Catalog', nullable: true})
  catalog_id: number

  @Field(() => String, { description: 'Images', nullable: true})
  images: string  
}