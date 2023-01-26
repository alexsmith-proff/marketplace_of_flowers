import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FilterEntity } from 'src/filter/entities/filter.entity';
import { FilterValueEntity } from 'src/filtervalue/entities/filtervalue.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  
  @Field(() => FilterEntity)
  @ManyToOne(() => FilterEntity, filter => filter.elements, {onDelete: 'CASCADE'})
  filter_item: FilterEntity

  @Field(() => [FilterValueEntity], { description: 'Array FilterValues' })
  @OneToMany(() => FilterValueEntity, values => values.filter_element, {eager: true, cascade: true})
  values: FilterValueEntity[]

}
