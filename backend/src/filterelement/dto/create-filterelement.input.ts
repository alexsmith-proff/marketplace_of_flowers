import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFilterElementInput {
  @Field(() => String, { description: 'Name' })
  name: string;
}
