import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFilterInput {
  @Field(() => String, { description: 'Filter name' })
  name: string;
}