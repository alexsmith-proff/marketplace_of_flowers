import { ElementEntity } from '../../element/entities/element.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('imgelement')
export class ImgElementEntity {
  @Field(() => ID, { description: 'id ImgElement' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name ImgElement' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug ImgElement' })
  @Column()
  slug: string

  @Field(() => String, { description: 'filename ImgElement', defaultValue: '' })
  @Column()
  filename: string

  @Field(() => ElementEntity, { description: 'element_ref ImgElement' })
  @ManyToOne(() => ElementEntity, element => element.img_elements)
  element_ref: ElementEntity
}
