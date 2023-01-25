import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFilterElementInput {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => Number, { description: 'Filter ID' })
  filter_id: number
}
