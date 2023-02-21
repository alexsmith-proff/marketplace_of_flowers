import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateFilterValueInput } from './create-filtervalue.input';

@InputType()
export class UpdateFilterValueInput extends PartialType(CreateFilterValueInput) {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  slug: string;
}
