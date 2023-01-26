import { ObjectType, Field, ID } from '@nestjs/graphql'
import { BrandEntity } from 'src/brand/entities/brand.entity';
import { CatalogEntity } from 'src/catalog/entities/catalog.entity';
import { ProductFilterEntity } from 'src/product-filter/entities/product-filter.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('product')
export class ProductEntity {
  @Field(() => ID, { description: 'id product' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'Name' })
  @Column()
  name: string;

  @Field(() => String, { description: 'Slug' })
  @Column({ nullable: false, default: '' })
  slug: string;

  @Field(() => Number, { description: 'Price' })
  @Column({ nullable: false, default: 0 })
  price: number

  @Field(() => Number, { description: 'Count in stock'})
  @Column({ nullable: false, default: 0 })
  count_in_stock: number

  @Field(() => String, { description: 'Vendor code'})
  @Column({ nullable: false, default: '' })
  vendor_code: string

  @Field(() => BrandEntity, { description: 'Brand', nullable: true})
  @ManyToOne(() => BrandEntity, brand => brand.product)
  brand: BrandEntity

  @Field(() => CatalogEntity, { description: 'Catalog', nullable: true})
  @ManyToOne(() => CatalogEntity, catalog => catalog.product)
  catalog: CatalogEntity

  @Field(() => [ProductFilterEntity])
  @OneToMany(() => ProductFilterEntity, filter => filter.product, { eager: true, cascade: true })
  filters: ProductFilterEntity[]

  // @Field(() => Number, { description: 'Main Image index', nullable: true})
  // @Column({ nullable: false, default: -1 })
  // main_image_index: number

  @Field(() => String, { description: 'Main Image', nullable: true})
  @Column({ nullable: false, default: '' })
  main_image: String

  // @Field(() => [String], { description: 'filenames images', nullable: true })
  @Column("text", { array: true, default: [] })
  filenames_images: string[]


  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}
