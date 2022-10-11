import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMenuInput {
  @Field(() => Int)
  id: number

  @Field(() => String, { description: 'Name' })
  name: string
}
