import { CreateImgElementInput } from './create-imgelement.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImgElementInput extends PartialType(CreateImgElementInput) {
  @Field(() => Number, { description: 'id ImgElement' })
  id: number

  @Field(() => String, { description: 'name ImgElement', nullable: true })
  name: string

  @Field(() => String, { description: 'slug ImgElement', nullable: true })
  slug: string

  @Field(() => String, { description: 'filename ImgElement', nullable: true})
  filename: string

  @Field(() => Number, { description: 'element_id ImgElement', nullable: true })
  element_id: number
}
