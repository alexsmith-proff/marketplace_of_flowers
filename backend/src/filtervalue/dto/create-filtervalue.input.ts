import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFilterValueInput {
  @Field(() => String, { description: 'Name)' })
  name: string;
}
