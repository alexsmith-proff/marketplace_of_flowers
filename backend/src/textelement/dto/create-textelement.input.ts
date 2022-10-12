import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTextElementInput {
  @Field(() => String, { description: 'name TextElement' })
  name: string

  @Field(() => String, { description: 'slug TextElement' })
  slug: string

  @Field(() => String, { description: 'text TextElement' })
  text: string

  @Field(() => Number)
  element_id: number
}
