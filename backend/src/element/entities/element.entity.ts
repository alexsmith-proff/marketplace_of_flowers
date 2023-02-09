import { SectionEntity } from './../../section/entities/section.entity';
import { TextElementEntity } from '../../textelement/entities/textelement.entity';
import { ImgElementEntity } from '../../imgelement/entities/imgelement.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { ProductEntity } from 'src/product/entities/product.entity';

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
  @ManyToOne(() => SectionEntity, section => section.elements, {onDelete: 'CASCADE'})
  section_ref: SectionEntity

  @Field(() => ProductEntity, { nullable: true })
  @OneToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}
