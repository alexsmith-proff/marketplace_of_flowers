import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from 'typeorm';

@ObjectType()
@Entity('catalog')
@Tree('closure-table')
export class CatalogEntity {
  @Field(() => ID, { description: 'ID catalog' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'Name catalog' })
  @Column()
  name: string

  @Field(() => String, { description: 'Slug catalog', nullable: true })
  @Column()
  slug: string

  @Field(() => Number, { description: 'Serial number'})
  @Column()
  serial_number: number

  @Field(() => [CatalogEntity], { description: 'Children' })
  @TreeChildren()
  children: CatalogEntity[];

  @Field(() => CatalogEntity, { description: 'Parent' })
  @TreeParent()
  parent: CatalogEntity

  @Field(() => ProductEntity)
  @OneToMany(() => ProductEntity, product => product.catalog, { eager: true, cascade: true })
  product: ProductEntity[]
}
