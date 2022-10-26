import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMenuInput {
  @Field(() => Int)
  id: number

  @Field(() => String, { description: 'Name', nullable: true })
  name: string

  @Field(() => String, {description: "This is slug menu", nullable: true })
  slug: string

  @Field(() => Number, { description: 'Serial number', nullable: true  })
  serial_number: number
}
