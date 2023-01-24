import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('filtervalue')
export class FilterValueEntity {
  @Field(() => Int, { description: 'ID FilterValue' })
  @PrimaryGeneratedColumn()
  id: number;
}
