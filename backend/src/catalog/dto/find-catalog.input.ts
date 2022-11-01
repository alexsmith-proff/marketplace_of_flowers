import { InputType, Field, PartialType } from '@nestjs/graphql';
import { TreeParent } from 'typeorm';
import { CatalogEntity } from '../entities/catalog.entity';

@InputType()
export class FindCatalogInput {  
  @Field(() => String, {nullable: true})
  name: string

  @Field(() => Number, {nullable: true})
  serial_number: number

  @Field(() => Number, {nullable: true, })
  parent_id: number
}
