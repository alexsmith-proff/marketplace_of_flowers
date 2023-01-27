import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('brand')
export class BrandEntity {
  @Field(() => ID, { description: 'id brend' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'Name brand' })
  @Column()
  name: string

  @Field(() => String, { description: 'Slug brand' })
  @Column()
  slug: string

  @Field(() => ProductEntity)
  @OneToMany(() => ProductEntity, product => product.brand, { eager: true, cascade: true })
  product: ProductEntity[]
}
