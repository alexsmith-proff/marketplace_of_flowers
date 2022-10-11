import { TextSectionEntity } from './../../textsection/entities/textsection.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity('section')
export class SectionEntity {
  @Field(() => ID, { description: 'id section' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name section' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug section' })
  @Column()
  slug: string

  @Field(() => [TextSectionEntity])
  @OneToMany(() => TextSectionEntity, textsection => textsection.section_ref)
  text_sections: TextSectionEntity[]
  // img_sections:

}
