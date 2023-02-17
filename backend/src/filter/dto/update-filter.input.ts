import { CreateFilterInput } from './create-filter.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateFilterInput extends PartialType(CreateFilterInput) {
  @Field(() => Int)
  id: number

  @Field(() => String)
  name: string;
}
