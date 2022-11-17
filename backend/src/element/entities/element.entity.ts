import { SectionEntity } from './../../section/entities/section.entity';
import { TextElementEntity } from '../../textelement/entities/textelement.entity';
import { ImgElementEntity } from '../../imgelement/entities/imgelement.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@ObjectType()
@Entity('element')
export class ElementEntity {
  @Field(() => ID, { description: 'id element' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name element' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug element' })
  @Column()
  slug: string

  @Field(() => [TextElementEntity])
  @OneToMany(() => TextElementEntity, textelement => textelement.element_ref, { eager: true, cascade: true })
  text_elements: TextElementEntity[]

  @Field(() => [ImgElementEntity])
  @OneToMany(() => ImgElementEntity, imgelement => imgelement.element_ref, { eager: true, cascade: true })
  img_elements: ImgElementEntity[]

  @Field(() => SectionEntity)
  @ManyToOne(() => SectionEntity, section => section.elements)
  section_ref: SectionEntity

}
