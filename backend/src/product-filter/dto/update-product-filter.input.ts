import { CreateProductFilterInput } from './create-product-filter.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductFilterInput extends PartialType(CreateProductFilterInput) {
  @Field(() => Int)
  id: number;
}
