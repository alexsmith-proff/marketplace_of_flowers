import { ElementEntity } from '../../element/entities/element.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
  @ManyToOne(() => ElementEntity, element => element.img_elements, {onDelete: 'CASCADE'})
  element_ref: ElementEntity

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}
