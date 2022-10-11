import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMenuInput {
  @Field(() => String, { description: 'Name' })
  name: string
}
