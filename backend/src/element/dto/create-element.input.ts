import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateElementInput {
  @Field(() => String, { description: 'name element' })
  name: string

  @Field(() => String, { description: 'slug element' })
  slug: string;

  @Field(() => Number)
  section_id: number

  @Field(() => Number, { nullable: true })
  product_id: number
}
