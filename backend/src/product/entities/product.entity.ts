import { ObjectType, Field, ID } from '@nestjs/graphql'
import { BrandEntity } from 'src/brand/entities/brand.entity';
import { CatalogEntity } from 'src/catalog/entities/catalog.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('product')
export class ProductEntity {
  @Field(() => ID, { description: 'id product' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'Name' })
  @Column()
  name: string;

  @Field(() => Number, { description: 'Price'})
  @Column()
  price: number

  @Field(() => Number, { description: 'Count in stock'})
  @Column()
  count_in_stock: number

  @Field(() => String, { description: 'Vendor code'})
  @Column()
  vendor_code: string

  @Field(() => BrandEntity, { description: 'Brand', nullable: true})
  @ManyToOne(() => BrandEntity, brand => brand.product)
  brand: BrandEntity

  @Field(() => CatalogEntity, { description: 'Catalog', nullable: true})
  @ManyToOne(() => CatalogEntity, catalog => catalog.product)
  catalog: CatalogEntity

  // @Field(() => String, { description: 'filename main image', nullable: true })
  // @Column()
  // filename_main_image?: string

  // @Field(() => [String], { description: 'filenames images', nullable: true })
  // @Column()
  // filenames_images: string[]

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}
