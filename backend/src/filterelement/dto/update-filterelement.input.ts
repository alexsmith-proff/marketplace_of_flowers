import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateFilterElementInput } from './create-filterelement.input';

@InputType()
export class UpdateFilterElementInput extends PartialType(CreateFilterElementInput) {
  @Field(() => String)
  name: string;
}
