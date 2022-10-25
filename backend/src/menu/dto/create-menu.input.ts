import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMenuInput {
  @Field(() => String, { description: 'Name' })
  name: string

  @Field(() => Number, { description: 'Serial number' })
  serial_number: number
}
