import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMenuInput {
  @Field(() => Int)
  id: number

  @Field(() => String, { description: 'Name' })
  name: string

  @Field(() => String, {description: "This is slug menu"})
  slug: string

  @Field(() => Number, { description: 'Serial number' })
  serial_number: number
}
