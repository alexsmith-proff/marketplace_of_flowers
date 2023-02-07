import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFilterValueInput {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => String, { description: 'Slug FilterValue', nullable: true })
  slug: string

  @Field(() => String, { description: 'Value FilterValue', nullable: true })
  value: string

  @Field(() => Number, { description: 'FilterElement id', nullable: true })
  filter_element_id: number
}
