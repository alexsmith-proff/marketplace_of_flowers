import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FilterValueEntity } from 'src/filtervalue/entities/filtervalue.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity('productfilter')
export class ProductFilterEntity {
  @Field(() => Int, { description: 'ProductFilter ID' })
  exampleField: number;

  @Field(() => String, { description: 'ProductFilter name', nullable: true })
  @Column({ nullable: true })
  name: string

  @Field(() => String, { description: 'ProductFilter slug', nullable: true })
  @Column({ nullable: true })
  slug: string

  @Field(() => ProductEntity)
  @ManyToOne(() => ProductEntity, product => product.filters, {onDelete: 'CASCADE'})
  product: ProductEntity

  @Field(() => FilterValueEntity)
  @OneToMany(() => FilterValueEntity, value => value.product_element, {eager: true, cascade: true})
  values: FilterValueEntity[]
}
