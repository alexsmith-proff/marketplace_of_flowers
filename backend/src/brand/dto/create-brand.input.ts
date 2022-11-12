import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBrandInput {
  @Field(() => String, { description: 'Name brand' })
  name: string;
}
