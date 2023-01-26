import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FilterElementEntity } from 'src/filterelement/entities/filterelement.entity';
import { ProductFilterEntity } from 'src/product-filter/entities/product-filter.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('filtervalue')
export class FilterValueEntity {
  @Field(() => Int, { description: 'ID FilterValue' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'Name FilterValue', defaultValue: '' })
  @Column()
  name: string

  @Field(() => String, { description: 'Slug FilterValue', nullable: true })
  @Column({ nullable: true })
  slug: string

  @Field(() => String, { description: 'Value FilterValue', nullable: true })
  @Column({ nullable: true })
  value: string

  @Field(() => FilterElementEntity, { description: 'Filter values' })
  @ManyToOne(() => FilterElementEntity, filter_element => filter_element.values, {onDelete: 'CASCADE'})
  filter_element: FilterElementEntity

  @Field(() => ProductFilterEntity)
  @ManyToOne(() => ProductFilterEntity, product => product.values, { onDelete: 'CASCADE' })
  product_element: ProductFilterEntity
}
