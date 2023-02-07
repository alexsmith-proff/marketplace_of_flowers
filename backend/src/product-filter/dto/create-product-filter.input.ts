import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductFilterInput {
  @Field(() => String, { description: 'Name ProductName' })
  name: string;

  @Field(() => String, { description: 'Slug ProductName', nullable: true })
  slug: string;

  @Field(() => String, { description: 'Slug ProductName', nullable: true })
  value: string;

  @Field(() => Number, { description: 'Catalog', nullable: true })
  product_id: number
}
