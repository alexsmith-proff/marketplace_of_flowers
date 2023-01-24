import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
