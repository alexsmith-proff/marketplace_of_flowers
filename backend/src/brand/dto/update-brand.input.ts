import { CreateBrandInput } from './create-brand.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBrandInput extends PartialType(CreateBrandInput) {
  @Field(() => Int)
  id: number
  @Field(() => String, { description: 'Name brand' })
  name: string;
}
