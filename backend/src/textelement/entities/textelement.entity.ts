import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ElementEntity } from 'src/element/entities/element.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('textelement')
export class TextElementEntity {
  @Field(() => ID, { description: 'id TextElement' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name TextElement' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug TextElement' })
  @Column()
  slug: string

  @Field(() => String, { description: 'text TextElement' })
  @Column()
  text: string

  @Field(() => ElementEntity)
  @ManyToOne(() => ElementEntity, element => element.text_elements)
  element_ref: ElementEntity
}
