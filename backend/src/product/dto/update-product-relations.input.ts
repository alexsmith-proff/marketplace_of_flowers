import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductRelationsInput {
  @Field(() => Int, { description: 'Product ID' })
  id: number;

  @Field(() => Number, { description: 'Brand ID', nullable: true })
  brand_id: number  

  @Field(() => Number, { description: 'Catalog ID', nullable: true })
  catalog_id: number 
}
