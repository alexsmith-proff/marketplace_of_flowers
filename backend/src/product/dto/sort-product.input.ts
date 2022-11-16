import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SortProductInput {
  @Field(() => String, { description: 'Sort Name' })
  sort_field: string

  @Field(() => String, { description: 'ASC-DESC sort' })
  sort_order: string 
}