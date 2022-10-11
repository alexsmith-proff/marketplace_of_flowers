import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImgSectionInput {
  @Field(() => String, { description: 'name ImgSection' })
  name: string

  @Field(() => String, { description: 'slug ImgSection' })
  slug: string

  @Field(() => String, { description: 'filename ImgSection'})
  filename: string

  @Field(() => Number, { description: 'section_id ImgSection' })
  section_id: number
}
