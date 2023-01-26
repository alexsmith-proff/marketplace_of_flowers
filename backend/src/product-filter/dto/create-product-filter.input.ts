import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductFilterInput {
  @Field(() => String, { description: 'Name ProductName' })
  name: string;

  @Field(() => String, { description: 'Slug ProductName', nullable: true })
  slug: string;

  @Field(() => Number, { description: 'Product ID' })
  product_id: number;
}
