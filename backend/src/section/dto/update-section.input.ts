import { CreateSectionInput } from './create-section.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSectionInput extends PartialType(CreateSectionInput) {
  @Field(() => Number)
  id: number

  @Field(() => String, { description: 'name section' })
  name: string

  @Field(() => String, { description: 'slug section' })
  slug: string;
}
