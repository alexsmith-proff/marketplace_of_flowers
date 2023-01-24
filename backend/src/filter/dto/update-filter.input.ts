import { CreateFilterInput } from './create-filter.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFilterInput extends PartialType(CreateFilterInput) {
  @Field(() => String)
  name: string;
}
