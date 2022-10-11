import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSectionInput {
  @Field(() => String, { description: 'name section' })
  name: string

  @Field(() => String, { description: 'slug section' })
  slug: string;

}
