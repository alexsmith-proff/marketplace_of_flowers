import { CreateTextSectionInput } from './create-textsection.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTextSectionInput extends PartialType(CreateTextSectionInput) {
  @Field(() => Number, { description: 'name TextSection' })
  id: number

  @Field(() => String, { description: 'name TextSection', nullable: true })
  name: string

  @Field(() => String, { description: 'slug TextSection', nullable: true })
  slug: string

  @Field(() => String, { description: 'text TextSection', nullable: true })
  text: string

  @Field(() => Number, { nullable: true })
  section_id: number
}
