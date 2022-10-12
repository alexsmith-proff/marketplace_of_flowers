import { CreateTextElementInput } from './create-textelement.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTextElementInput extends PartialType(CreateTextElementInput) {
  @Field(() => Number, { description: 'name TextElement' })
  id: number

  @Field(() => String, { description: 'name TextElement', nullable: true })
  name: string

  @Field(() => String, { description: 'slug TextElement', nullable: true })
  slug: string

  @Field(() => String, { description: 'text TextElement', nullable: true })
  text: string

  @Field(() => Number, { nullable: true })
  element_id: number
}
