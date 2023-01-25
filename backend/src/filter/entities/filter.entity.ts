import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FilterElementEntity } from 'src/filterelement/entities/filterelement.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('filter')
export class FilterEntity {
  @Field(() => Int, { description: 'ID Filter' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Name Filter' })
  @Column({ nullable: true })
  name: string

  @Field(() => String, { description: 'Slug Filter', nullable: true })
  @Column({ nullable: true })
  slug: string

  @Field(() => [FilterElementEntity])
  @OneToMany(() => FilterElementEntity, element => element.filter_item, {eager: true, cascade: true})
  elements: FilterElementEntity[]
}
