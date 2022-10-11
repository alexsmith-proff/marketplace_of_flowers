import { CreateImgSectionInput } from './create-imgsection.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImgSectionInput extends PartialType(CreateImgSectionInput) {
  @Field(() => Number, { description: 'id ImgSection' })
  id: number

  @Field(() => String, { description: 'name ImgSection', nullable: true })
  name: string

  @Field(() => String, { description: 'slug ImgSection', nullable: true })
  slug: string

  @Field(() => String, { description: 'filename ImgSection', nullable: true})
  filename: string

  @Field(() => Number, { description: 'section_id ImgSection', nullable: true })
  section_id: number
}
