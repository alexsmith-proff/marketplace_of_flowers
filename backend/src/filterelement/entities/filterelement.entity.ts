import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FilterValueEntity } from 'src/filtervalue/entities/filtervalue.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('filterelement')
export class FilterElementEntity {
  @Field(() => Int, { description: 'ID filterelement' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Name FilterElement', nullable: true })
  @Column({ nullable: true })
  name: string
  
  @Field(() => String, { description: 'Slug FilterElement', nullable: true })
  @Column({ nullable: true })
  slug: string

  @Field(() => [FilterValueEntity], { description: 'Array FilterValues' })
  @OneToMany(() => FilterValueEntity, values => values.filter_element, {eager: true, cascade: true})
  values: FilterValueEntity[]
}
