import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { BrandEntity } from 'src/brand/entities/brand.entity';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Name', nullable: true })
  name: string

  @Field(() => Number, { description: 'Price', nullable: true })
  price: number

  @Field(() => Number, { description: 'Count in stock', nullable: true })
  count_in_stock: number

  @Field(() => String, { description: 'Vendor code', nullable: true })
  vendor_code: string 
}
