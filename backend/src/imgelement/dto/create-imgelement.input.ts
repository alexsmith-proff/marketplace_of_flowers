import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateImgElementInput {
  @Field(() => String, { description: 'name ImgElement' })
  name: string

  @Field(() => String, { description: 'slug ImgElement' })
  slug: string

  @Field(() => String, { description: 'filename ImgElement'})
  filename: string

  @Field(() => Number, { description: 'element_id ImgElement' })
  element_id: number
}
