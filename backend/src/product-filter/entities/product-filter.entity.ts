import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('productfilter')
export class ProductFilterEntity {
  @Field(() => Int, { description: 'ProductFilter ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'ProductFilter name', nullable: true })
  @Column({ nullable: true })
  name: string

  @Field(() => String, { description: 'ProductFilter slug', nullable: true })
  @Column({ nullable: true })
  slug: string

  @Field(() => ProductEntity)
  @ManyToOne(() => ProductEntity, product => product.filters, {onDelete: 'CASCADE'})
  product: ProductEntity

  @Field(() => String, { description: 'ProductFilter name', nullable: true })
  @Column({ nullable: true })
  value: string
}
