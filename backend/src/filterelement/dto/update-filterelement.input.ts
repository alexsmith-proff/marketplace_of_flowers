import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { CreateFilterElementInput } from './create-filterelement.input';

@InputType()
export class UpdateFilterElementInput extends PartialType(CreateFilterElementInput) {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  slug: string;

  @Field(() => String, { nullable: true })
  value: string;
}
