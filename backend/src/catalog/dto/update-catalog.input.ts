import { CreateCatalogInput } from './create-catalog.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCatalogInput extends PartialType(CreateCatalogInput) {
  @Field(() => Int)
  id: number
  
  @Field(() => String)
  name: string

  @Field(() => Number, { description: 'Serial number', nullable: true })
  serial_number: number
}
