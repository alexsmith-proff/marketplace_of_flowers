import { CreateElementInput } from './create-element.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateElementInput extends PartialType(CreateElementInput) {
  @Field(() => Number)
  id: number

  @Field(() => String, { description: 'name element' })
  name: string

  @Field(() => String, { description: 'slug element' })
  slug: string;

  @Field(() => Number, { nullable: true })
  product_id: number
}
