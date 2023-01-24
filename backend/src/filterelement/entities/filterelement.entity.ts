import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('filterelement')
export class FilterElementEntity {
  @Field(() => Int, { description: 'ID filterelement' })
  @PrimaryGeneratedColumn()
  id: number;
}
