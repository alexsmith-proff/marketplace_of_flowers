import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { BrandEntity } from 'src/brand/entities/brand.entity';

@InputType()
export class UpdateProductBrandInput {
  @Field(() => Int, { description: 'Product ID' })
  id: number;

  @Field(() => Number, { description: 'Brand ID' })
  brand_id: number  
}
