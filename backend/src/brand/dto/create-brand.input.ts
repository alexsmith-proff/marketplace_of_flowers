import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBrandInput {
  @Field(() => String, { description: 'Name brand' })
  name: string;

  @Field(() => String, { description: 'Slug brand', nullable: true })
  slug: string;
}
