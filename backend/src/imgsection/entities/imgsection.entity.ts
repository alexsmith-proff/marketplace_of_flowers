import { SectionEntity } from './../../section/entities/section.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('imgsection')
export class ImgSectionEntity {
  @Field(() => ID, { description: 'id ImgSection' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name ImgSection' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug ImgSection' })
  @Column()
  slug: string

  @Field(() => String, { description: 'filename ImgSection', defaultValue: '' })
  @Column()
  filename: string

  @Field(() => SectionEntity, { description: 'section_ref ImgSection' })
  @ManyToOne(() => SectionEntity, section => section.img_sections)
  section_ref: SectionEntity
}
