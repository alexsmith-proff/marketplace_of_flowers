import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateFilterValueInput } from './create-filtervalue.input';

@InputType()
export class UpdateFilterValueInput extends PartialType(CreateFilterValueInput) {
  @Field(() => String)
  name: string;
}
