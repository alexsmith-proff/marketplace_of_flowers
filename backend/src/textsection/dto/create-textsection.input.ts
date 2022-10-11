import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTextSectionInput {
  @Field(() => String, { description: 'name TextSection' })
  name: string

  @Field(() => String, { description: 'slug TextSection' })
  slug: string

  @Field(() => String, { description: 'text TextSection' })
  text: string

  @Field(() => Number)
  section_id: number
}
