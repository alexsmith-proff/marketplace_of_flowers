import { SectionEntity } from './../../section/entities/section.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('textsection')
export class TextSectionEntity {
  @Field(() => ID, { description: 'id TextSection' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name TextSection' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug TextSection' })
  @Column()
  slug: string

  @Field(() => String, { description: 'text TextSection' })
  @Column()
  text: string

  @Field(() => SectionEntity)
  @ManyToOne(() => SectionEntity, section => section.text_sections)
  section_ref: SectionEntity
}
