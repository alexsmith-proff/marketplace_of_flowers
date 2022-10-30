import { InputType, Field } from '@nestjs/graphql';
import { CatalogEntity } from '../entities/catalog.entity';

@InputType()
export class CreateCatalogInput {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => Number, { description: 'Serial number'})
  serial_number: number

  @Field(() => Number, { description: 'Parent', nullable: true})
  parent_id: number
}
