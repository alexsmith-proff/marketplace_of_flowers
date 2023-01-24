import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('filter')
export class FilterEntity {
  @Field(() => Int, { description: 'ID Filter' })
  @PrimaryGeneratedColumn()
  id: number;
}
